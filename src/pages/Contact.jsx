import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Fox from '../models/Fox';

const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [isLoading, setIsLoading] = useState(false);
	const [currentAnimation, setCurrentAnimation] = useState('idle');
	const { alert, showAlert, hideAlert } = useAlert();

	//! PRIVATE INFO hidden in env (.env needs to be placed in ./src)
	const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
	const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
	const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
	const toName = import.meta.env.VITE_APP_EMAILJS_TO_NAME;
	const toEmail = import.meta.env.VITE_APP_EMAILJS_TO_EMAIL;

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleFocus = () => setCurrentAnimation('walk');

	const handleBlur = () => setCurrentAnimation('idle');

	const handleSubmit = e => {
		e.preventDefault();
		setIsLoading(true);
		setCurrentAnimation('hit');

		emailjs
			.send(
				serviceID,
				templateID,
				{
					from_name: form.name,
					to_name: toName,
					from_email: form.email,
					to_email: toEmail,
					message: form.message,
				},
				publicKey,
			)
			.then(
				() => {
					setIsLoading(false);

					showAlert({
						show: true,
						text: 'Thank you for your message!',
						type: 'success',
					});
					setTimeout(() => {
						hideAlert(false);
						setCurrentAnimation('idle');
						setForm({
							name: '',
							email: '',
							message: '',
						});
					}, [3000]);
				},
				error => {
					setIsLoading(false);
					setCurrentAnimation('idle');
					console.error(error);

					showAlert({
						show: true,
						text: "I didn't receive your message!",
						type: 'danger',
					});
				},
			);
	};

	const adjustFoxForScreenSize = () => {
		let screenScale, screenPosition, screenRotation;
		if (window.innerWidth > 768 && window.innerWidth <= 1024) {
			screenScale = [0.7, 0.7, 0.7];
			screenPosition = [0.5, 0.5, 0];
			screenRotation = [12.75, -0.65, 0];
		} else if (window.innerWidth > 430 && window.innerWidth <= 768) {
			screenScale = [0.7, 0.7, 0.7];
			screenPosition = [0.5, 0.3, 0];
			screenRotation = [12.7, -0.6, 0];
		} else if (window.innerWidth <= 430) {
			screenScale = [0.7, 0.7, 0.7];
			screenPosition = [0.6, 0.5, 0];
			screenRotation = [12.75, -0.7, 0];
		} else {
			screenScale = [0.66, 0.66, 0.66];
			screenPosition = [0.7, -0.2, 0];
			screenRotation = [12.6, -0.6, 0];
		}
		return [screenScale, screenPosition, screenRotation];
	};
	const [foxScale, foxPosition, foxRotation] = adjustFoxForScreenSize();

	return (
		<section className='relative contact-container !pb-4'>
			{alert.show && <Alert {...alert} />}
			<div className='flex lg:flex-row flex-col mt-2'>
				<div className='flex-1 min-w-[50%] flex-col'>
					<h1 className='head-text'>Get in touch</h1>
					<form className='w-full flex flex-col gap-7 mt-6' onSubmit={handleSubmit}>
						<label className='text-black-500 font-semibold'>
							Name
							<input
								className='input'
								type='text'
								name='name'
								autoComplete='off'
								required
								placeholder='Your name'
								value={form.name}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>
						<label className='text-black-500 font-semibold'>
							Email
							<input
								className='input'
								type='email'
								name='email'
								autoComplete='off'
								required
								placeholder='email@gmail.com'
								value={form.email}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>
						<label className='text-black-500 font-semibold'>
							Message
							<textarea
								className='textarea'
								name='message'
								autoComplete='off'
								rows={4}
								required
								placeholder='Let me know how I can help you!'
								value={form.message}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>
						<button
							className='btn'
							type='submit'
							disabled={isLoading}
							onFocus={handleFocus}
							onBlur={handleBlur}
						>
							{isLoading ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				</div>

				<div className='lg:w-1/2 w-full lg:h-auto md:h-[400px] sm:h-[350px] h-[240px]'>
					<Canvas
						camera={{
							position: [0, 0, 5],
							fov: 75,
							near: 0.1,
							far: 1000,
						}}
					>
						<directionalLight intensity={2.5} position={[0, 0, 1]} />
						<ambientLight intensity={0.5} />
						<Suspense fallback={<Loader />}>
							<Fox
								currentAnimation={currentAnimation}
								scale={foxScale}
								position={foxPosition}
								rotation={foxRotation}
							/>
						</Suspense>
					</Canvas>
				</div>
			</div>

			<div>
				<hr className='lg:mt-16  mt-0 border-slate-200' />
				<div className='mt-4 sm:py-4 py-2 flex justify-center items-center gap-8 w-full '>
					<Footer />
				</div>
			</div>
		</section>
	);
};

export default Contact;

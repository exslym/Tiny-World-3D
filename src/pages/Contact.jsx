import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	// const { alert, showAlert, hideAlert } = useAlert();
	const [isLoading, setIsLoading] = useState(false);
	// const [currentAnimation, setCurrentAnimation] = useState('idle');

	//! PRIVATE INFO hidden in env (.env needs to be placed in ./src)
	const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
	const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
	const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
	const toName = import.meta.env.VITE_APP_EMAILJS_TO_NAME;
	const toEmail = import.meta.env.VITE_APP_EMAILJS_TO_EMAIL;

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleFocus = () => {};
	const handleBlur = () => {};
	const handleSubmit = e => {
		e.preventDefault();
		setIsLoading(true);

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
					// showAlert({
					// 	show: true,
					// 	text: 'Thank you for your message!',
					// 	type: 'success',
					// });
					setTimeout(() => {
						// hideAlert(false);
						// setCurrentAnimation('idle');
						setForm({
							name: '',
							email: '',
							message: '',
						});
					}, [1000]);
				},
				error => {
					setIsLoading(false);
					console.error(error);
					// setCurrentAnimation('idle');

					// showAlert({
					// 	show: true,
					// 	text: "I didn't receive your message!",
					// 	type: 'danger',
					// });
				},
			);
	};

	return (
		<section className='relative flex lg:flex-row flex-col max-container'>
			<div className='flex-1 min-w-[50%] flex-col'>
				<h1 className='head-text'>Get in touch</h1>
				<form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
					<label className='text-black-500 font-semibold'>
						Name
						<input
							className='input'
							type='text'
							name='name'
							autoComplete='off'
							required
							placeholder='Name'
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
						Your message
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
		</section>
	);
};

export default Contact;

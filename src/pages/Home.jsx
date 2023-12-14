import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import { soundoff, soundon } from '../assets/icons';
import sakura from '../assets/media/sakura.mp3';
import Footer from '../components/Footer';
import HomeInfo from '../components/HomeInfo';
import Loader from '../components/Loader';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Sky from '../models/Sky';
import Island from '../models/island';

const Home = () => {
	const audioRef = useRef(new Audio(sakura));
	audioRef.current.volume = 0.2;
	audioRef.current.loop = true;

	const [isPlayingMusic, setIsPlayingMusic] = useState(false);
	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(1);

	useEffect(() => {
		if (isPlayingMusic) {
			audioRef.current.play();
		}
		return () => {
			audioRef.current.pause();
		};
	}, [isPlayingMusic]);

	const adjustIslandForScreenSize = () => {
		let screenScale, screenPosition;
		let rotation = [0.15, 4.7, 0];

		if (window.innerWidth <= 768) {
			screenScale = [0.085, 0.085, 0.085];
			screenPosition = [0, -1, -1];
		} else {
			screenScale = [0.11, 0.11, 0.11];
			screenPosition = [0, -0.9, -1];
		}

		return [screenScale, screenPosition, rotation];
	};

	const adjustPlaneForScreenSize = () => {
		let screenScale, screenPosition;

		if (window.innerWidth <= 768) {
			screenScale = [0.45, 0.45, 0.45];
			screenPosition = [-0.05, -0.7, 3.4];
		} else {
			screenScale = [0.6, 0.6, 0.6];
			screenPosition = [-0.05, -0.7, 3.4];
		}

		return [screenScale, screenPosition];
	};

	const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
	const [planeScale, planePosition] = adjustPlaneForScreenSize();

	return (
		<section className='w-full h-screen relative'>
			<div className='absolute top-20 left-0 right-0 z-[1] flex items-center justify-center'>
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			<Canvas
				className={`w-full h-screen bg-transparent ${
					isRotating ? 'cursor-grabbing' : 'cursor-grab'
				}`}
				camera={{ fov: 65, near: 0.1, far: 1000 }}
				// camera={{ near: 0.1, far: 1000 }}
			>
				<Suspense fallback={<Loader />}>
					<directionalLight position={[20, 15, 20]} intensity={1.5} />
					<ambientLight intensity={0.8} />
					<hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

					<Island
						scale={islandScale}
						position={islandPosition}
						rotation={islandRotation}
						isRotating={isRotating}
						setIsRotating={setIsRotating}
						setCurrentStage={setCurrentStage}
					/>
					{/* <Sky scale={[1, 1, 1]} isRotating={isRotating} /> */}
					<Sky scale={[0.01, 0.01, 0.01]} rotation={[0, 1.8, 0]} isRotating={isRotating} />
					{/* <Bird scale={[0.003, 0.003, 0.003]} position={[-5, 2, 1]} /> */}
					<Bird scale={[0.00095, 0.00095, 0.00095]} position={[-4.8, 8, 8]} />
					<Plane
						scale={planeScale}
						position={planePosition}
						isRotating={isRotating}
						rotation={[0.02, 20.2, 0]}
					/>
				</Suspense>
			</Canvas>

			<div className='sm:py-4 py-2 flex justify-center items-center gap-8 w-full absolute bottom-0'>
				<div className='absolute left-2'>
					<img
						src={!isPlayingMusic ? soundoff : soundon}
						alt='sound'
						className='sm:w-10 w-8 sm:h-10 h-8 cursor-pointer object-contain'
						onClick={() => setIsPlayingMusic(!isPlayingMusic)}
					/>
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default Home;

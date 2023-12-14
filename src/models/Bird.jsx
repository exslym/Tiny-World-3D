import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import birdScene from '../assets/glb/bird.glb';
// import birdScene from '../../public/3d/bird.glb';
// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042

const Bird = ({ ...props }) => {
	const birdRef = useRef();
	const { scene, animations } = useGLTF(birdScene);
	const { actions } = useAnimations(animations, birdRef);

	useEffect(() => {
		actions['Take 001'].play();
	}, []);

	useFrame(({ clock, camera }) => {
		//* Update the Y position to simulate bird-like motion using a sine wave
		// birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.1 + 2;
		// birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.1 + 0.32;

		if (window.innerWidth <= 768) {
			birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.1 - 0.1;
		} else {
			birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.1 + 0.2;
		}

		//* Check if the bird reached a certain endpoint relative to the camera
		if (birdRef.current.position.x > camera.position.x + 3.6) {
			//* Change direction to backward and rotate the bird 180 degrees on the y-axis
			birdRef.current.rotation.y = Math.PI;
		} else if (birdRef.current.position.x < camera.position.x - 3.6) {
			//* Change direction to forward and reset the bird's rotation
			birdRef.current.rotation.y = 0;
		}

		//* Update the X and Z positions based on the direction
		if (birdRef.current.rotation.y === 0) {
			//* Moving forward
			birdRef.current.position.x += 0.012;
			birdRef.current.position.z -= 0.013;
		} else {
			//* Moving backward
			birdRef.current.position.x -= 0.012;
			birdRef.current.position.z += 0.013;
		}
	});

	return (
		<mesh {...props} ref={birdRef} className='z-50 isolate'>
			<primitive object={scene} />
		</mesh>
	);
};

export default Bird;

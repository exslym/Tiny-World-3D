import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import skyScene from '../../public/3d/sky.glb';
// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042

const Sky = ({ isRotating, ...props }) => {
	const sky = useGLTF(skyScene);
	const skyRef = useRef();

	useFrame((_, delta) => {
		if (isRotating) {
			skyRef.current.rotation.y += 0.15 * delta;
		}
	});

	return (
		<mesh {...props} ref={skyRef}>
			<primitive object={sky.scene} />
		</mesh>
	);
};

export default Sky;

import { a } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

import islandScene from '../../public/3d/island.glb';

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
	const islandRef = useRef();

	//* Get access to the Three.js renderer and viewport
	const { gl, viewport } = useThree();
	const { nodes, materials } = useGLTF(islandScene);

	//* Use a ref for the last mouse x position
	const lastX = useRef(0);
	//* Use a ref for rotation speed
	const rotationSpeed = useRef(0);
	//* Define a damping factor to control rotation damping
	const dampingFactor = 0.95;

	//* Handle pointer (mouse or touch) DOWN event
	const handlePointerDown = e => {
		e.stopPropagation();
		e.preventDefault();
		setIsRotating(true);

		//* Calculate the clientX based on whether it's a touch event or a mouse event
		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		//* Store the current clientX position for reference
		lastX.current = clientX;
	};

	//* Handle pointer (mouse or touch) UP event
	const handlePointerUp = e => {
		e.stopPropagation();
		e.preventDefault();
		setIsRotating(false);
	};

	//* Handle pointer (mouse or touch) MOVE event
	const handlePointerMove = e => {
		e.stopPropagation();
		e.preventDefault();

		if (isRotating) {
			const clientX = e.touches ? e.touches[0].clientX : e.clientX;
			const delta = (clientX - lastX.current) / viewport.width;

			islandRef.current.rotation.y += delta * 0.01 * Math.PI;
			lastX.current = clientX;
			rotationSpeed.current = delta * 0.01 * Math.PI;
		}
	};

	//* Handle KEYDOWN events
	const handleKeyDown = e => {
		if (e.key === 'ArrowLeft') {
			if (!isRotating) setIsRotating(true);
			islandRef.current.rotation.y += 0.01 * Math.PI;
		} else if (e.key === 'ArrowRight') {
			if (!isRotating) setIsRotating(true);
			islandRef.current.rotation.y -= 0.01 * Math.PI;
		}
	};

	//* Handle KEYUP events
	const handleKeyUp = e => {
		if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
			setIsRotating(false);
		}
	};

	//* This function is called on each frame update
	useFrame(() => {
		//* If not rotating, apply damping to slow down the rotation (smoothly)
		if (!isRotating) {
			//* Apply damping factor
			rotationSpeed.current *= dampingFactor;

			//* Stop rotation when speed is very small
			if (Math.abs(rotationSpeed.current) < 0.001) {
				rotationSpeed.current = 0;
			}

			islandRef.current.rotation.y += rotationSpeed.current;
		} else {
			//* When rotating, determine the current stage based on island's orientation
			const rotation = islandRef.current.rotation.y;

			const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

			//* Set the current stage based on the island's orientation
			switch (true) {
				case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
					setCurrentStage(4);
					break;
				case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
					setCurrentStage(3);
					break;
				case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
					setCurrentStage(2);
					break;
				case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
					setCurrentStage(1);
					break;
				default:
					setCurrentStage(null);
			}
		}
	});

	useEffect(() => {
		//* Add event listeners for pointer and keyboard events
		const canvas = gl.domElement;
		canvas.addEventListener('pointerdown', handlePointerDown);
		canvas.addEventListener('pointerup', handlePointerUp);
		canvas.addEventListener('pointermove', handlePointerMove);
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);

		//* Remove event listeners when component unmounts
		return () => {
			canvas.removeEventListener('pointerdown', handlePointerDown);
			canvas.removeEventListener('pointerup', handlePointerUp);
			canvas.removeEventListener('pointermove', handlePointerMove);
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

	return (
		<a.group ref={islandRef} {...props}>
			<mesh
				geometry={nodes.polySurface944_tree_body_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface945_tree1_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface946_tree2_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface947_tree1_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface948_tree_body_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface949_tree_body_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
		</a.group>
	);
};

export default Island;

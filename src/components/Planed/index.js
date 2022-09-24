import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Physics, usePlane } from '@react-three/cannon'

const Planed = () => {
    const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
	}));
	return (
		<mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
			<planeBufferGeometry attach="geometry" args={[100, 100]} />
			<meshLambertMaterial attach="material" color="lightblue" />
		</mesh>
	);
}

export default Planed
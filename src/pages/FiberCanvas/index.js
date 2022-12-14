import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Planed from '../../components/Planed';
import Boxed from '../../components/Box/Boxed';

const FiberCanvas = () => {
  return (
    <Canvas>
		<OrbitControls />
		<Stars />
		<ambientLight intensity={0.5} />
		<spotLight position={[10, 15, 10]} angle={0.3} />
		<Physics>
			<Boxed />
			<Planed />
		</Physics>
	</Canvas>
  )
}

export default FiberCanvas
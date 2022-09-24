import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import BoxC from '../../components/Box'
import Planed from '../../components/Planed'
const Box = () => {
    return (
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <Stars />
            <pointLight position={[10, 10, 10]} />
            {/* <BoxC position={[-1.2, 0, 0]} /> */}
            <Physics>
                <BoxC position={[0, 2, 0]} />
                <Planed />
            </Physics>
        </Canvas>
    )
}

export default Box
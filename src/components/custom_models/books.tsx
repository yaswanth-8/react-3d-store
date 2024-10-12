import React from 'react';
import { useGLTF } from '@react-three/drei';

export const Books = ({handleClick}) => {
    const { scene } = useGLTF('/models/books/scene.gltf');
    return (
        <mesh onClick={()=> handleClick('Harry potter', 'Rs. 180')}>
            <primitive object={scene} scale={0.3} position={[0.8, 2.56, -4.08]} />
        </mesh>
    );
}
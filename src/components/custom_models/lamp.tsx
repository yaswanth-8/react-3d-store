import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type LampProps = {
    handleClick: (name: string, price: string) => void;
};

export const Lamp: React.FC<LampProps> = ({ handleClick }) => {
    const { scene } = useGLTF('/models/classic_table_lamp/scene.gltf');

    const [intensity, setIntensity] = useState(5.5);

    return (
        <mesh onClick={() => {
            handleClick('Lamp', 'Rs. 280');
            setIntensity((prev) => {
                return prev? 0 : 5.5;
            });
        }}>
            <primitive object={scene} scale={1.5} position={[-0.5, 1.5, 0]} rotation={[0, 1.2, 0]} />
            <pointLight
                position={[-0.33, 2.5, 0.2]}
                intensity={intensity}
                distance={5}
                color="#FDB813"
            />
        </mesh>
    );
};

useGLTF.preload('/models/classic_table_lamp/scene.gltf');
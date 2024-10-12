import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";

export const HPToy = ({ position = [1, 1, 1], handleClick }) => {
    const pos = new Vector3(...position);
    const { scene } = useGLTF('/models/hp/scene.gltf');

    // State to control light intensity
    const [intensity, setIntensity] = useState(5);

    return (
        <mesh
            onClick={(event) => {
                event.stopPropagation();  // Prevents event bubbling
                handleClick('HP Toy', 'Rs. 625');

                // Toggle light intensity
                setIntensity((prev) => prev ? 0 : 5);
            }}
        >
            {/* HP Toy 3D Model */}
            <primitive object={scene} scale={1} position={pos} rotation={[0, 1, 0]} />

            {/* Point light to toggle */}
            <pointLight
                position={[-3.7, 2, 1.5]}
                intensity={intensity}  // Controlled by state
                distance={0.4}
                color="#FDB813"
            />
        </mesh>
    );
};

useGLTF.preload('/models/hp/scene.gltf');

import React from "react";
import { Euler, Vector3 } from "three";

// Book Component with pages
export const Book = ({postion = [0, 1.60, 0], rotation = [0,0,0]}) =>{
    const pos = new Vector3(...postion);
    const rot = new Euler(...rotation);
    return (
        <group position={pos} rotation={rot}>
            {/* Book cover */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.5, 0.08, 0.7]} />
                <meshStandardMaterial color="#228B22" /> {/* Forest green */}
            </mesh>

            {/* Book pages */}
            <mesh position={[0.022, 0, 0]} scale={[0.48, 0.06, 0.68]}>
                <boxGeometry args={[0.956, 0.97, 1.03]} />
                <meshStandardMaterial color="#FFFFFF" />
            </mesh>
        </group>
    );
}
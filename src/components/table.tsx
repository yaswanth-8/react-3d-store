import React from "react";
import { Vector3 } from "three";

// Table Component
export const Table = ({position=[0,0,0], tableColor="#5C4033"}) =>{
    const pos = new Vector3(...position)
    return (
        <group position={pos}>
            {/* Table Top */}
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshStandardMaterial color={tableColor} /> {/* Darker brown */}
            </mesh>

            {/* Table Legs */}
            <mesh position={[-0.9, 0.75, -0.4]}>
                <boxGeometry args={[0.1, 1.5, 0.1]} />
                <meshStandardMaterial color="#5C4033" />
            </mesh>
            <mesh position={[0.9, 0.75, -0.4]}>
                <boxGeometry args={[0.1, 1.5, 0.1]} />
                <meshStandardMaterial color="#5C4033" />
            </mesh>
            <mesh position={[-0.9, 0.75, 0.4]}>
                <boxGeometry args={[0.1, 1.5, 0.1]} />
                <meshStandardMaterial color="#5C4033" />
            </mesh>
            <mesh position={[0.9, 0.75, 0.4]}>
                <boxGeometry args={[0.1, 1.5, 0.1]} />
                <meshStandardMaterial color="#5C4033" />
            </mesh>
        </group>
    );
}


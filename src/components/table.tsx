import React from "react";

// Table Component
export const Table = () =>{
    return (
        <group position={[0, 0, 0]}>
            {/* Table Top */}
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshStandardMaterial color="#5C4033" /> {/* Darker brown */}
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


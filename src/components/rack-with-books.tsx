import React from "react";
import { Vector3 } from "three";
import { Book } from "./book";

// Table Component
export const RackWithBooks = ({position = [0,0,0]}) =>{
    const pos = new Vector3(...position);
    return (
        <group position={pos}>
            {/* right */}
            <mesh position={[0.8, 1.8, 0]} rotation={[0,0,1.585]}>
                <boxGeometry args={[0.7, 0.1, 1]} />
                <meshStandardMaterial color="#5C4033" /> 
            </mesh>
            {/* left */}
            <mesh position={[-0.8, 1.8, 0]} rotation={[0,0,1.585]}>
                <boxGeometry args={[0.7, 0.1, 1]} />
                <meshStandardMaterial color="#5C4033" /> 
            </mesh>
            
            {/* bottom */}
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[1.5, 0.1, 1]} />
                <meshStandardMaterial color="#5C4033" /> 
            </mesh>
            <Book postion={[0.59,1.78,0]} rotation={[0,0,1]}/>
            <Book postion={[0.489,1.78,0]} rotation={[0,0,1]}/>
        </group>
    );
}


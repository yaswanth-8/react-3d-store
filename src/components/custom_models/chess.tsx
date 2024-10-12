import React from "react";
import { useGLTF } from "@react-three/drei"
import { Vector3 } from "three";

export const Chess = ({position = [1,1,1],handleClick}) => {
    const pos = new Vector3(...position);
    const {scene} = useGLTF('/models/chess/scene.gltf');
    return (
        <mesh onClick={(event)=>{
            event.stopPropagation();
            handleClick('Chess Board', 'Rs. 125');
            }}>
            <primitive object={scene} scale={2} position={pos} rotation={[0,-1.55,0]}/>
        </mesh>
    )
}
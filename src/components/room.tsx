import React, { useState } from "react";
import FlowerPot from "./flowerpot";
import { TableAndBook } from "./table-with-book";
import { RackWithBooks } from "./rack-with-books";
import { TV } from "./tv";

// Room Component
export const Room = () =>{

    const wallColor = "#fff4e6"
    const glassColor = "#A8C8F0"
    const floorColor = "#c8c5c4"

    const [tvDisplay, setTvDisplay] = useState({
        firstLine: '',
        secondLine: ''
    });

    const handlePotClick = () => {
        setTvDisplay({
            firstLine: 'Flower pot',
            secondLine: 'Rs. 2'
        })
    }

    const handleObjectClick = (name, price) => {
        setTvDisplay({
            firstLine: name,
            secondLine: price
        })
    }


    return (
        <group>

            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <boxGeometry args={[12, 12, 0.4]} />
                <meshStandardMaterial color={floorColor} roughness={0.8} />
            </mesh>


            {/* Back Wall */}
            <mesh position={[0, 5, -5]}>
                <boxGeometry args={[10, 10, 0.4]} />
                <meshStandardMaterial color="#fff9f0" />
            </mesh>

            {/* Left Wall */}
            <mesh position={[-5, 5, 0]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[10, 10, 0.4]} />
                <meshStandardMaterial color={wallColor} />
            </mesh>

            {/* Right Wall (Glass) */}
            <mesh position={[5, 5, 0]} rotation={[0, -Math.PI / 2, 0]} onClick={(event)=>{
                event.stopPropagation();
                handleObjectClick('Glass', 'Rs. 350')
            }}>
                <boxGeometry args={[10, 10, 0.15]} />
                <meshStandardMaterial
                    color={glassColor}
                    transparent={true}
                    opacity={0.3}
                    metalness={0.5}
                    roughness={0}
                />
            </mesh>

            {/* Roof */}
            <mesh position={[0, 10, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <boxGeometry args={[10.5, 10, 0.1]} />
                <meshStandardMaterial color="#fff4f0" />
            </mesh>
            <RackWithBooks handleClick={handleObjectClick} position={[1,1,-4.3]}/>
            <TableAndBook handleClick={handleObjectClick}/>
            <TableAndBook handleClick={handleObjectClick} position={[-4.12, 0, 1]} rotation={[0, 1.6, 0]} />
            <mesh onClick={handlePotClick}>
                <FlowerPot position={[-4.7 , 0.2, 5.5]}/> 
            </mesh>
            <TV position={[-2, 4.2, -4.65]} displayText={tvDisplay}/>
        </group>
    );
}
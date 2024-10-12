import React from "react";
import { Table } from "./table";
import { Book } from "./book";
import { Vector3, Euler } from "three";

export const TableAndBook = ({ position = [0, 0, 0], rotation = [0, 0, 0], handleClick, tableColor="#5C4033" }) => {
    const pos = new Vector3(...position);  // Handles position
    const rot = new Euler(...rotation);    // Handles rotation

    return (
        <group position={pos} rotation={rot}>
            {/* Table mesh */}
            <mesh onClick={() => handleClick('Table', 'Rs 150')}>
                <Table tableColor={tableColor}/>
            </mesh>   
            
            {/* Book mesh with stopPropagation to prevent the table's click */}
            <mesh position={[0.5, 0, 0]} onClick={(event) => {
                event.stopPropagation(); // Stop the click event from reaching the table
                handleClick('Book', 'Rs 80');
            }}>
                <Book />
            </mesh>
        </group>
    );
};

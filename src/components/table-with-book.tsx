import React from "react";
import { Table } from "./table";
import { Book } from "./book";
import { Vector3, Euler } from "three";

export const TableAndBook = ({ position = [0, 0, 0], rotation = [0, 0, 0], handleClick }) => {
    const pos = new Vector3(...position);  // Handles position
    const rot = new Euler(...rotation);    // Handles rotation

    return (
        <group position={pos} rotation={rot}>
            {/* Table mesh */}
            <mesh onClick={() => handleClick('Table', 'Rs 150')}>
                <Table />
            </mesh>   
            
            {/* Book mesh with stopPropagation to prevent the table's click */}
            <mesh onClick={(event) => {
                event.stopPropagation(); // Stop the click event from reaching the table
                handleClick('Book', 'Rs 80');
            }}>
                <Book />
            </mesh>
        </group>
    );
};

import React from "react";
import { Table } from "./table";
import { Book } from "./book";
import { Vector3, Euler } from "three";

export const TableAndBook = ({ position = [0, 0, 0], rotation = [0, 0, 0], handleClick }) => {
    const pos = new Vector3(...position);  // Handles position
    const rot = new Euler(...rotation);    // Handles rotation

    return (
        <group position={pos} rotation={rot}>
            <Table />
            <mesh onClick={handleClick}>
                <Book />
            </mesh>
        </group>
    );
};

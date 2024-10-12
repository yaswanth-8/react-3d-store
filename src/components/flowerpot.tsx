import React from 'react';
import { Vector3 } from 'three';

function FlowerPot({ position = [0, 0, 0], scale = 1 }) {
  // Convert position array to Vector3
  const pos = new Vector3(...position);

  return (
    <group position={pos} scale={scale}>
      {/* Pot */}
      <group position={[0, 0.3, 0]}>
        {/* Main pot body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.2, 0.6, 32]} />
          <meshStandardMaterial color="#808080" roughness={0.7} />
        </mesh>

        {/* Soil/Mud */}
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.12, 32]} />
          <meshStandardMaterial color="#3E2723" roughness={1} />
        </mesh>
      </group>

      {/* Plant Stem */}
      <group position={[0, 0.5, 0]}>
        {/* Main stem */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>

        {/* Leaves */}
        {[...Array(4)].map((_, i) => (
          <group 
            key={i} 
            position={[0, 0.2 + i * 0.15, 0]} 
            rotation={[0, (i * Math.PI) / 2, 0]}
          >
            <mesh rotation={[Math.PI / 4, 0, 0]}>
              <coneGeometry args={[0.1, 0.3, 4]} />
              <meshStandardMaterial color="#228B22" />
            </mesh>
          </group>
        ))}

        {/* Flower */}
        <group position={[0, 0.8, 0]}>
          {/* Flower center */}
          <mesh>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#FFD700" />
          </mesh>

          {/* Petals */}
          {[...Array(8)].map((_, i) => (
            <group 
              key={i} 
              rotation={[0, (i * Math.PI) / 4, 0]}
            >
              <mesh position={[0.1, 0, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#FF69B4" />
              </mesh>
            </group>
          ))}
        </group>
      </group>
    </group>
  );
}

export default FlowerPot;
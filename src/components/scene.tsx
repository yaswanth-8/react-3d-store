import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Room } from './room';

// Main Scene Component
function Scene() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [10, 10, 10], fov: 75 }}>
                <color attach="background" args={['#202020']} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <Room />
                <OrbitControls
                    minPolarAngle={0}  // Prevents camera from rotating below the horizon
                    maxPolarAngle={Math.PI / 2}  // Limits rotation to looking straight down
                />
            </Canvas>
        </div>
    );
}

export default Scene;
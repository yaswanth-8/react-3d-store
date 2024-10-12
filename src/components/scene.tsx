import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Room } from './room';
import { Books } from './custom_models/books';

// Main Scene Component
function Scene() {
    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
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

            {/* UI Text Below Canvas */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                width: '100%',
                textAlign: 'center',
                fontSize: '18px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '10px'
            }}>
                Click on TV to turn it on. Click on objects to display the price on the TV.
            </div>
        </div>
    );
}

export default Scene;

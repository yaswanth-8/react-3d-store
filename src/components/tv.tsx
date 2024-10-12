import React, { useState } from 'react';
import { Vector3 } from 'three';
import { Text } from '@react-three/drei';

export const TV = ({ position = [0, 0, 0], scale = 1, displayText }) => {
  const [screenColor, setScreenColor] = useState('gray'); 
  const [showText, setShowText] = useState(false); 


  const pos = new Vector3(...position);

  const handleClick = () => {
    setScreenColor(prevColor => (prevColor === 'gray' ? 'white' : 'gray')); 
    setShowText(prevShow => !prevShow); 
  };

  return (
    <mesh position={pos}> 
      {/* TV Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 2, 0.2]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* TV Screen with click event */}
      <mesh position={[0, 0.5, 0.11]} onClick={handleClick}>
        <boxGeometry args={[2.7, 1.7, 0.01]} />
        <meshStandardMaterial color={screenColor} />
      </mesh>

      {/* Display text "TV" on the screen when clicked */}
      {showText && (
        <Text
          position={[0, 0.5, 0.12]} // Position the text slightly in front of the screen
          fontSize={0.5} // Adjust the font size
          color="black" // Text color
          anchorX="center" // Horizontal anchor in the center of the text
          anchorY="middle" // Vertical anchor in the middle of the text
        >
          {displayText}
        </Text>
      )}
    </mesh>
  );
};

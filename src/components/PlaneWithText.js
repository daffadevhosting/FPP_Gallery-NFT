import React from 'react';
import { Html } from '@react-three/drei';

function PlaneWithText({ texture, width, height, text, position }) {
  return (
    <group position={position}>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <Html center>
        <div style={{ textAlign: 'center', fontSize: '16px' }}>{text}</div>
      </Html>
    </group>
  );
}

export default PlaneWithText;

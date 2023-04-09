import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

function BasePlane({ width, height, color = '#ffffff', textureUrl = null, ...props }) {
  const texture = useLoader(THREE.TextureLoader, textureUrl);
  
  return (
    <mesh {...props}>
      <planeGeometry args={[width, height]} />
      {textureUrl ? (
        <meshStandardMaterial map={texture} />
      ) : (
        <meshStandardMaterial color={color} />
      )}
    </mesh>
  );
}

export default BasePlane;

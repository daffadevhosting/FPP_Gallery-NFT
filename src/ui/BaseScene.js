import { Suspense } from "react";
import { PointerLockControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Lights from '../components/Lights.js';
import Floor from '../components/Floor.js';

const BasicScene = ({ children }) => {

  return (
        <Suspense fallback={null}>
        <Lights />

        <Physics gravity={[0, -9.8, 0]}>
          {children}
          <Floor position={[0, -13, 0]} rotation={[Math.PI / -2, 0, 0]} color="dimgray" />
        </Physics>
        <PointerLockControls />
        </Suspense>
  );
};

export default BasicScene;

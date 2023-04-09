import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { Loader, PointerLockControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Lights from '../components/Lights.js';
import Floor from '../components/Floor.js';

const BasicScene = ({ children }) => {

  return (
    <div style={{ height: '100vh' }}>
        <Suspense fallback={null}>
      <Canvas dpr={[1, 2]} shadows
             camera={{
              makeDefault: true,
              fov: 50
            }}>
        <Lights />

        <Physics gravity={[0, -9.8, 0]}>
          {children}

          <Floor rotation={[Math.PI / -2, 0, 0]} color="dimgray" />
        </Physics>
        <PointerLockControls />
      </Canvas>
        </Suspense>
      <Loader />
    </div>
  );
};

export default BasicScene;

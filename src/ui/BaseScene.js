import { Canvas } from '@react-three/fiber';
import { Loader, PointerLockControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Lights from '../components/Lights.js';
import Floor from '../components/Floor.js';

const BasicScene = ({ children }) => {

  return (
    <div style={{ height: '100vh' }}>
      <Canvas shadows camera={{ fov: 50 }}>
        <Lights />

        <Physics gravity={[0, -9.8, 0]}>
          {children}

          <Floor rotation={[Math.PI / -2, 0, 0]} color="dimgray" />
        </Physics>

        <PointerLockControls />
      </Canvas>
      <Loader
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
        initialState={(active) => active}
        />
    </div>
  );
};

export default BasicScene;

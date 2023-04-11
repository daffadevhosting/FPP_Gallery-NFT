import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import Scene from "./Scene";

export default function App() {

  return (
    <div style={{ height: '100vh' }}>
      <Canvas shadows camera={{ makeDefault: true, fov: 50 }}>
          <pointLight position={[10, 10, 10]} />
          <Scene />
      </Canvas>
      <Loader />
    </div>
  );
}


import { useLoader } from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import { Suspense } from "react";

// Komponen Room
const Room = () => {
  const [cubeTexture] = useLoader(CubeTextureLoader, [
    [
      "./assets/img/px.png",
      "./assets/img/nx.png",
      "./assets/img/py.png",
      "./assets/img/ny.png",
      "./assets/img/pz.png",
      "./assets/img/nz.png",
    ],
  ]);

  return (
    <Suspense fallback={null}>
      <mesh>
        <boxGeometry args={[10, 10, 10]} />
        <meshBasicMaterial attach="material" map={cubeTexture} side={2} />
      </mesh>
    </Suspense>
  );
};

export default Room;

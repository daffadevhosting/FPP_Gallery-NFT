import * as THREE from 'three'
import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber'

const BaseBox = ({ ...props }) => {
  const [ref] = useBox((index) => ({
    type: 'Static',
    mass: 1,
    onCollide: (e) => {
      console.log(e);
    },
    ...props,
  }));

const texture = useLoader(THREE.TextureLoader, './assets/img/tembok.png');

  return (
    <mesh castShadow position={props.position} ref={ref}>
      <boxGeometry args={props.args} />
      <meshStandardMaterial color={props.color} map={texture} />
    </mesh>
  );
};

export default BaseBox;

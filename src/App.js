import React, { useEffect, useState } from "react";
import { Sky } from '@react-three/drei';
import BaseScene from './ui/BaseScene';
import BaseBox from './ui/BaseBox';
import BaseCharacter from './ui/BaseCharacter';
import BasePlane from './ui/BasePlane';
import Text from './components/Text';
import { FPSControls } from "react-three-fpscontrols";

function App() {
  const [showFPSControls, setShowFPSControls] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowFPSControls(true);
      } else {
        setShowFPSControls(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const texts = [
    { position: [-10, 6, -19.9], text: 'Lorem ipsum kolor si mamen', size: 1, color: 'red' },
    { position: [-19.9, 6, 14], rotation: [0, 45.55, 0], text: 'color sit amet cotor', size: 1.5, color: 'black' },
    { position: [12, 2, 20], rotation: [0, 91.10, 0], text: 'condecttur adi pising di calana', size: 1 },
    { position: [19, 26, -5], rotation: [0, 91.10, 0], text: 'NFT Gallery', size: 5, height: 2 },
  ]

  return (
    <BaseScene>
      <BaseBox text={false} position={[-20, 0.5, 0]} args={[0.1, 30, 50]} color="gray" />
      <BaseBox text={false} position={[20, 0.5, 0]} args={[0.1, 30, 50]} color="gray" />
      <BaseBox text={false} position={[0, 0.5, -20]} args={[50, 30, 0.1]} color="dimgray" />
      <BaseBox text={false} position={[0, 0.5, 20]} args={[50, 30, 0.1]} color="dimgray" />
      <BaseBox text={false} position={[0, 0.5, 20]} args={[50, 30, 0.1]} color="dimgray" />
      <BaseBox text={false} position={[0, 30, 20]} args={[50, 30, 50]} color="dimgray" />

          
      {showFPSControls ? (
        <FPSControls
          orbit={{
            target: [0, 2, 0]
          }}
          enableJoystick
        />
      ) : (
        <BaseCharacter controls position={[0, 2, 0]} args={[0.5]} color="yellow" />
      )}



      <BasePlane text={false} width={5} height={5} position={[-19.9, 3, -10]} rotation={[0, 45.55, 0]} textureUrl="/assets/frame/112so.png" />
      <BasePlane text={false} width={5} height={5} position={[-19.9, 3, 10]} rotation={[0, 45.55, 0]} textureUrl="/assets/frame/112so.png" />
      <BasePlane text={false}  width={10} height={5} position={[0, 3, -19.9]} textureUrl="/assets/frame/112so.png" />
      <BasePlane text={false} width={5} height={5} position={[10, 3, -19.9]} textureUrl="/assets/frame/112so.png" />
      <BasePlane text={false} width={5} height={5} position={[-10, 3, -19.9]} textureUrl="/assets/frame/112so.png" />

      
      {texts.map((textProps, index) => <Text key={index} {...textProps} />)}


      <Sky />
    </BaseScene>
  );
}

export default App;

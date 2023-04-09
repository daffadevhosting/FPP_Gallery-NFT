import React from 'react'
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import poppins from '../fonts/Poppins_Regular.json'

extend({ TextGeometry })

export default function Text({ position, text, size, rotation, color }) {
  const font = new FontLoader().parse(poppins);

  return (
    <mesh position={position} rotation={rotation}>
      <textGeometry args={[text, { font, size, height: 0.2 }]}/>
      <meshPhysicalMaterial attach='material' color={color}/>
    </mesh>
  )
}


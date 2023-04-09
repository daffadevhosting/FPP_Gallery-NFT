import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Joystick } from 'react-joystick-component';
// eslint-disable-next-line
const JoystickControls = () => {
  const cameraRef = useRef()
  const controlsRef = useRef()
  const [isMobile, setIsMobile] = useState(false)
  const [joystickX, setJoystickX] = useState(0)
  const [joystickZ, setJoystickZ] = useState(0)

  useEffect(() => {
    // Check if the user is on a mobile device
    const userAgent = window.navigator.userAgent.toLowerCase()
    setIsMobile(userAgent.includes('android') || userAgent.includes('iphone'))
  }, [])

  // Setup DeviceOrientationControls
  useFrame(() => {
    if (controlsRef.current) {
      // Move the camera based on joystick values
      cameraRef.current.position.x += joystickX * 0.05
      cameraRef.current.position.z += joystickZ * 0.05

      // Update DeviceOrientationControls
      controlsRef.current.update()
    }
  })

  // Handle joystick movement
  const handleJoystickMove = (e) => {
    setJoystickX(e.x)
    setJoystickZ(e.y)
  }

  if (!isMobile) {
    return <perspectiveCamera ref={cameraRef} position={[0, 0, 5]} />
  }

  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 0, 5]} />
      <Joystick
        size={100}
        baseColor="#f5f5f5"
        stickColor="#6f6f6f"
        move={(e) => handleJoystickMove(e)}
      />
    </>
  )
}

export const usePlayerControls = () => {
  const keys = { KeyW: 'forward', KeyS: 'backward', KeyA: 'left', KeyD: 'right', Space: 'jump' };
  // eslint-disable-next-line
  const moveFieldByKey = (key) => keys[key];

  const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, jump: false });

  useEffect(() => {
    const handleKeyDown = (e) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
    const handleKeyUp = (e) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [moveFieldByKey]);
  return movement;
};
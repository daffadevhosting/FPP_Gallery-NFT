import { useState, useEffect } from 'react';

/*****************
 * Player Controls
 ****************/
export const usePlayerControls = (isTouchDevice) => {
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

  useEffect(() => {
    if (!isTouchDevice) return;
    
    const handleTouchStart = (e) => {
      e.preventDefault();

      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;

      // Check if the touch is in the top or bottom half of the screen
      const { innerHeight } = window;
      const halfHeight = innerHeight / 2;

      if (y < halfHeight) {
        setMovement((m) => ({ ...m, forward: true }));
      } else if (y > halfHeight) {
        setMovement((m) => ({ ...m, backward: true }));
      }

      // Check if the touch is in the left or right half of the screen
      const { innerWidth } = window;
      const halfWidth = innerWidth / 2;

      if (x < halfWidth) {
        setMovement((m) => ({ ...m, left: true }));
      } else if (x > halfWidth) {
        setMovement((m) => ({ ...m, right: true }));
      }
    };

    const handleTouchEnd = (e) => {
      e.preventDefault();

      setMovement({ forward: false, backward: false, left: false, right: false });
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isTouchDevice]);

  return movement;
};

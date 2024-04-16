import { useEffect, useState } from 'react';

export const useAnimationState = () => {
    const [animationState, setAnimationState] = useState('initial');
  
    useEffect(() => {
      const savedState = localStorage.getItem('animationState');
      if (savedState) {
        setAnimationState(savedState);
      }
    }, []);
  
    const updateAnimationState = (state) => {
      setAnimationState(state);
      localStorage.setItem('animationState', state);
    };
  
    return [animationState, updateAnimationState];
  };
  
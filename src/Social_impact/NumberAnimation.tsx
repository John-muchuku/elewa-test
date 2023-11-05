import React, { useEffect, useState } from 'react';

// Define the prop type for NumberAnimation
type NumberAnimationProps = {
  endValue: number; // Specify that endValue should be of type number
};

const NumberAnimation: React.FC<NumberAnimationProps> = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 7; // Animation duration in seconds

    // Calculate the step size based on the end value and duration
    const step = (endValue / duration) / 60; // 60 frames per second

    const animationInterval = setInterval(() => {
      if (count < endValue) {
        setCount((prevCount) => Math.min(prevCount + step, endValue));
      } else {
        clearInterval(animationInterval);
      }
    }, 1000 / 60); // 60 frames per second

    return () => {
      clearInterval(animationInterval);
    };
  }, [endValue]);

  return <div className="number-animation">{Math.round(count)}</div>;
};

export default NumberAnimation;

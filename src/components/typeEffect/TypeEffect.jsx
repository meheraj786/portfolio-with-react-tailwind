import { TypeAnimation } from 'react-type-animation';
import React from 'react';

export const TypeEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mern Stack Developer',
        1000,
        'Full-Stack Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '32px', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
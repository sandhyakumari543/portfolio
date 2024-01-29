import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ['Frontend Developer', 'Web Designer', 'web Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typing"></span>;
};

export default TypingAnimation;

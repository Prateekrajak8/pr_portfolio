import React, { useEffect, useRef } from 'react';

const TypingEffectCanvas = () => {
  const canvasRef = useRef(null);
  const textArray = ["I'm Backend Developer", "I'm Web Developer"];
  const speed = 50; // Typing speed in milliseconds
  const pauseTime = 1000; // Pause time between phrases in milliseconds

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let currentText = '';
    let currentTextIndex = 0;
    let currentCharIndex = 0;

    const drawBackground = () => {
      // Create a diagonal gradient background
      // const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      // gradient.addColorStop(0, '#74ebd5');
      // gradient.addColorStop(1, '#ACB6E5');
      
      // ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawText = () => {
      // Draw text
      ctx.font = '24px Arial';
      ctx.fillStyle = '#fff'; // Set text color to white
      ctx.fillText(currentText, 10, 30);
    };

    const typeNextChar = () => {
      currentText = textArray[currentTextIndex].substring(0, currentCharIndex + 1);
      drawBackground();
      drawText();

      if (currentCharIndex < textArray[currentTextIndex].length) {
        currentCharIndex++;
        setTimeout(typeNextChar, speed);
      } else {
        // Pause before moving to the next text
        setTimeout(() => {
          currentCharIndex = 0;
          currentTextIndex = (currentTextIndex + 1) % textArray.length;
          typeNextChar();
        }, pauseTime);
      }
    };

    typeNextChar();
  }, []);

  return <canvas ref={canvasRef} width={4000} height={500} style={{ border: '1px solid #ddd' }} />;
};

export default TypingEffectCanvas;

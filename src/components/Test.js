import React, { useEffect, useRef } from 'react';

const NeuralNetworkCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const nodeRadius = 10;
    const layerGap = 80;
    const nodeGap = 40;

    let time = 0;

    const drawNeuralNetwork = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nodes and connections
      const numLayers = Math.floor(canvas.width / layerGap);
      const numNodes = Math.floor(canvas.height / nodeGap);

      for (let layer = 0; layer < numLayers; layer++) {
        for (let node = 0; node < numNodes; node++) {
          const x = layer * layerGap + Math.sin(time + node) * 50;
          const y = node * nodeGap + Math.cos(time + node) * 30;

          // Draw node
          ctx.beginPath();
          ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
          ctx.fillStyle = '#333';
          ctx.fill();

          // Draw connections
          if (layer < numLayers - 1) {
            for (let nextNode = 0; nextNode < numNodes; nextNode++) {
              const nextX = (layer + 1) * layerGap;
              const nextY = nextNode * nodeGap + Math.sin(time + nextNode) * 30;

              ctx.beginPath();
              ctx.moveTo(x + nodeRadius, y);
              ctx.lineTo(nextX - nodeRadius, nextY);
              ctx.strokeStyle = '#333';
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      // Update time for animation
      time += 0.02;

      // Repeat the animation
      requestAnimationFrame(drawNeuralNetwork);
    };

    drawNeuralNetwork();
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default NeuralNetworkCanvas;

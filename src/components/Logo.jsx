import React from "react";
import ParticleImage, { Vector, forces } from "react-particle-image";


const Logo = ({color}) => {
  const particleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => {
      if(color){
        return color
      }
      // Calculate a gradient color from white to orange
      const gradientRatio = x / image.width; // ratio based on y position
      const r = 450;
      const g = Math.floor(90  * gradientRatio); // interpolating green from 255 (white) to 165 (orange)
      const b = Math.floor(250 * (1 - gradientRatio)); // interpolating blue from 255 (white) to 0 (orange)
      return `rgba(${r}, ${g}, ${b}, 0.8)`; // Adjust opacity as needed
    },
      // color: ({ x, y, image }) => "orange",
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
    },
  };
  
  const motionForce = (x, y) => {
    return forces.disturbance(x, y, 10);
  };
  return (
    <div style={{ width: '100%', maxWidth: '800px', height: '100%' ,}} > 
      <ParticleImage
        src={"http://localhost:8000/static/7c8ad6a622e4f76da593f6c267b5aa59/0682b/InnovazyWhite.webp"}
        scale={0.15}
        entropy={10}
        maxParticles={8000}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        particleOptions={particleOptions}
        backgroundColor="transparent"
        style={{ width: '100%', height: 'auto',opacity:"0.5" }}
      />
    </div>
  );
};

export default Logo;

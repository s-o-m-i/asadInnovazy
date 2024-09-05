// import { BrowserCompanyLogo } from "./browser-company-logo";
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useRef } from "react";
import { PiTreeStructureFill } from "react-icons/pi";
import { paragraphTextColor } from '../../styles/styles';


export const ArcCard = ({ name, desc, icon }) => {
  const boundingRef = useRef(null);

  return (
    <div className="flex flex-col [perspective:800px]">
      <div
        onMouseLeave={() => (boundingRef.current = null)}
        onMouseEnter={(ev) => {
          boundingRef.current = ev.currentTarget.getBoundingClientRect();
        }}
        onMouseMove={(ev) => {
          if (!boundingRef.current) return;
          const x = ev.clientX - boundingRef.current.left;
          const y = ev.clientY - boundingRef.current.top;
          const xPercentage = x / boundingRef.current.width;
          const yPercentage = y / boundingRef.current.height;
          const xRotation = (xPercentage - 0.5) * 20;
          const yRotation = (0.5 - yPercentage) * 20;

          ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
          ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
          ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
          ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
        }}
        className=" card background-glass px-4 py-10 mt-6 col-span-4 h-[300px] hover:shadow-[0_10px_50px_rgba(148,_163,_184,_0.2)]
 w-full sm:w-[400px]  rounded-xl  text-[#01A977] transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]"
      >
 

<div className="text-4xl text-primary-orange">

{icon}
</div>
        <div className="pt-4">
          {/* <p className="text-3xl  text-white font-bold">{name}</p> */}
          {/* <p className="text-xl text-white ">{title}</p> */}
          <h2 className='text-[24px] font-semibold text-white mb-5'>{name}</h2>
          <p className={`w-[100%] ${paragraphTextColor} leading-7 text-[14px] mb-8`}>{desc}</p>
        </div>
      
        <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
      </div>
    </div>
  );
};

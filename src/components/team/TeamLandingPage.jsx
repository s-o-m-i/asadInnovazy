import React, { useEffect } from "react"
import {
  container,
  headingText,
  paragraphTextColor,
  textwhite,
} from "../../styles/styles"
import { teamHomePageData } from "../../utils/team-data"
import { TbBrandReactNative } from "react-icons/tb";

import TeamCard from "./TeamCard"


import '../../ui/testimonials.css'
import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaBootstrap, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import {SiJest }from 'react-icons/si';
import {SiExpress } from 'react-icons/si';

import {SiPython }from 'react-icons/si';
import {SiSelenium } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const technologies = [
  { 
    name: "React", 
    value: 2, 
    icon: <FaReact />, 
    colorScheme: "text-blue-400", // React's brand color
    bgcolorScheme: "hover:bg-blue-400" // React's brand color
  },
  { 
    name: "React", 
    value: 2, 
    icon: <RiNextjsFill />, 
    colorScheme: "text-black", // React's brand color
    bgcolorScheme: "hover:bg-gray-400" // React's brand color
  },

  { 
    name: "Angular", 
    value: 2, 
    icon: <FaAngular />, 
    colorScheme: "text-red-600" ,// Angular's brand color
    bgcolorScheme: "hover:bg-red-600" // Angular's brand color
  },
  { 
    name: "Vue.js", 
    value: -2, 
    icon: <FaVuejs />, 
    colorScheme: "text-green-500", // Vue's brand color
    bgcolorScheme: "hover:bg-green-500" // Vue's brand color
  },
  { 
    name: "HTML", 
    value: 2, 
    icon: <FaHtml5 />, 
    colorScheme: "text-orange-600", // HTML's brand color
    bgcolorScheme: "hover:bg-orange-600" // HTML's brand color
  },
  { 
    name: "CSS", 
    value: -2, 
    icon: <FaCss3Alt />, 
    colorScheme: "text-blue-600", // CSS's brand color
    bgcolorScheme: "hover:bg-blue-600" // CSS's brand color
  },
  { 
    name: "Tailwind", 
    value: 2, 
    icon: <SiTailwindcss />, 
    colorScheme: "text-teal-400", // Tailwind's brand color
    bgcolorScheme: "hover:bg-teal-400" // Tailwind's brand color
  },
  { 
    name: "Bootstrap", 
    value: -2, 
    icon: <FaBootstrap />, 
    colorScheme: "text-purple-600", // Bootstrap's brand color
    bgcolorScheme: "hover:bg-purple-600" // Bootstrap's brand color
  },
  { 
    name: "React Native", 
    value: -2, 
    icon:<TbBrandReactNative />, 
    colorScheme: "text-blue-400", // React Native shares React's brand color
    bgcolorScheme: "hover:bg-blue-400" // React Native shares React's brand color
  },
  { 
    name: "JavaScript", 
    value: 2, 
    icon: <IoLogoJavascript />, 
    colorScheme: "text-yellow-400", // JavaScript's brand color
    bgcolorScheme: "hover:bg-yellow-400" // JavaScript's brand color
  },
  { 
    name: "TypeScript", 
    value: -2, 
    icon: <SiTypescript />, 
    colorScheme: "text-blue-500", // TypeScript's brand color
    bgcolorScheme: "hover:bg-blue-500" // TypeScript's brand color
  },
  { 
    name: "Jest", 
    value: 2, 
    icon: <SiJest />, 
    colorScheme: "text-purple-600", // Jest's brand color
    bgcolorScheme: "hover:bg-purple-400" // Jest's brand color
  },
  { 
    name: "Express", 
    value: 2, 
    icon: <SiExpress />, 
    colorScheme: "text-black", // Express's brand color
    bgcolorScheme: "hover:bg-gray-600" // Express's brand color
  },

  { 
    name: "Python", 
    value: 2, 
    icon: <SiPython />, 
    colorScheme: "text-blue-600", // Python brand color
    bgcolorScheme: "hover:bg-blue-500" // Python brand color
  },
  { 
    name: "Node", 
    value: 2, 
    icon: <FaNodeJs />, 
    colorScheme: "text-green-600", // Node.js brand color
    bgcolorScheme: "hover:bg-green-500" // Node.js brand color
  },
  { 
    name: "Selenium", 
    value: 2, 
    icon: <SiSelenium />, 
    colorScheme: "text-green-600", // Selenium brand color
    bgcolorScheme: "hover:bg-green-500" // Selenium brand color
  },
  
  
];

const TeamLandingPage = () => {
  useEffect(() => {
    // function parallax(e) {
    //   const objects = document.querySelectorAll(".glowing_text")
    //   if (objects) {
    //     objects.forEach(move => {
    //       const movingValue = move.getAttribute("data-value")
    //       const x = (e.clientX * movingValue) / 150
    //       const y = (e.clientY * movingValue) / 150
    //       move.style.transform = `translateX(${x}px) translateY(${y}px)`
    //     })
    //   }
    // }

    // document.addEventListener("mousemove", parallax)

    // return () => {
    //   document.removeEventListener("mousemove", parallax)
    // }
    function parallaxEffect(event) {
const elements = document.querySelectorAll(".skill-box")
console.log("element-----",elements)
if(elements){

  elements.forEach((item,index)=>{
    console.log("mousemovevalue ---",event.ClientX)
    const moveValue = item.getAttribute("data-value")
    const x = (event.clientX * moveValue) / 150;
    const y = (event.clientY * moveValue) / 150;
    item.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }) 
}
    }

    document.addEventListener("mousemove",parallaxEffect)
  return () => {
      document.removeEventListener("mousemove", parallaxEffect)
    }
  }, [])

  return (
    <div>
      <div className="homeSectionleftBlob">
        <div className="homeSectionRightBlob">
          <div className={`${container} `}>
            <div className="">
              <h1
                className={`${textwhite}   text-[55px] w-[100%] sm:w-[75%] font-medium`}
              >
                The Team of{" "}
                <span className="text-primary-orange">Innovazy</span>
              </h1>
            </div>
            <p
              className={`w-[100%] sm:w-[60%]  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
            >
              Meet the team that's investing into the new generation
            </p>

            <div className="grid md:grid-cols-12 gap-4 justify-center">
              {teamHomePageData.map(x => {
                return (
                  <>
                    <TeamCard
                      name={x.name}
                      image={x.image}
                      imageAlt={x.imageAlt}
                      description={x.description}
                      designation={x.designation}
                      github={x.github}
                      instagram={x.instagram}
                      linkedIn={x.linkedIn}
                      twitter={x.twitter}
                    />
                  </>
                )
              })}
            </div>

          

          




 {/* Technologies with Parallax Effect */}
 <div className="flex justify-center mt-28">
              <h1 className={`${textwhite} text-center ${headingText} sm:text-[42px] w-[100%] sm:w-[75%] font-medium`}>
                Building Bridges with <span className="achive-linear">Every Line of Code</span>
              </h1>
            </div>

            <div className="mt-20 grid-cols-8 grid gap-2   gap-y-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  data-value={tech.value}
                  className={`skill-box background-glass flex items-center justify-center transition-all ease-linear text-white w-[100px] h-[100px] rounded-[50%] ${tech.bgcolorScheme} hover:bg-opacity-90 hover:scale-110 duration-300 col-span-1 `}
                  
     
                >
                  {/* <h1>{tech.name}</h1> */}
                  <div className={`text-4xl ${tech.colorScheme}`}>
               {tech.icon}
                  </div>

                </div>
              ))}
            </div>
            






<div className="grid grid-cols-12 mt-48 gap-5">
    <div className="col-span-12 sm:col-span-3 ">
        <div className="team-achievement-box w-[80%] background-glass py-1 border-2 overflow-hidden relative  border-purple-600  rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite} z-50 relative `}>25k+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Projects Completed</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[80%] py-1 border-2 overflow-hidden relative border-purple-600  rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite}  z-50 relative hover:text-black`}>25k+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Happy Customer</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[80%] py-1 border-2 overflow-hidden relative border-purple-600 rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite} z-50 relative hover:text-black`}>10+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Years of Experience</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[80%] py-1 border-2 overflow-hidden relative border-purple-600 rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite} z-50 relative hover:text-black`}>25k+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Projects Completed</h1>
        </div>
    </div>
</div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamLandingPage

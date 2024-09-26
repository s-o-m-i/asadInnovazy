import React, { useEffect } from "react"
import {
  container,
  headingText,
  paragraphTextColor,
  textwhite,
} from "../../styles/styles"
import { teamHomePageData } from "../../utils/team-data"

import TeamCard from "./TeamCard"

import TeamSlider from "./TeamSlider"
import '../../ui/testimonials.css'
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
{/* 
            <div className="vertical-container sm:block hidden">
              <h1 className="glowing_text">Harmony</h1>
              <h1 className="glowing_text">Partnership</h1>
              <h1 className="glowing_text">Synergy</h1>
              <h1 className="glowing_text">Unity</h1>
            </div> */}

          

            {/* <div class="relative inline-flex  group">
    <div
        class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
    </div>
    <a href="#" title="Get quote now"
        class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button">Get it now
    </a>
</div> */}
<div className="flex justify-center">


            <h1
              className={`${textwhite}  text-center mt-28 ${headingText} sm:text-[42px] w-[100%] sm:w-[75%] font-medium`}
            >
              Building Bridges with <span className="text-primary-orange"> Every Line of Code</span>
            </h1>
              </div>

         <div className="skill-box border-2 mt-2 border-white flex items-center justify-center transition-all ease-linear  text-white w-[50px] h-[50px] rounded-[50%]"> 
          <h1 className="" data-value="6">JS</h1>
         </div>

{/* <TeamSlider/> */}


<div className="grid grid-cols-12 mt-48 gap-5">
    <div className="col-span-12 sm:col-span-3 ">
        <div className="team-achievement-box w-[80%] py-1 border-2 overflow-hidden relative border-primary-orange rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite} z-50 relative hover:text-black`}>25k+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Projects Completed</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[80%] py-1 border-2 overflow-hidden relative border-primary-orange rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite}  z-50 relative hover:text-black`}>25k+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Happy Customer</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[80%] py-1 border-2 overflow-hidden relative border-primary-orange rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite} z-50 relative hover:text-black`}>10+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Years of Experience</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[80%] py-1 border-2 overflow-hidden relative border-primary-orange rounded-full text-center">
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

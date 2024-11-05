import React, { useEffect } from "react"
import {
  container,
  headingText,
  paragraphTextColor,
  textwhite,
} from "../../styles/styles"
import { teamHomePageData } from "../../utils/team-data"
import TeamCard from "./TeamCard"
import '../../ui/testimonials.css'
import { technologies } from "../../utils/team-tech-data";
import { useTranslation } from "react-i18next"


const TeamLandingPage = () => {
  const {t} = useTranslation("team")
  useEffect(() => {
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
          {/* <div className={`${container} `}> */}
            <div className="w-full">
              <h1
                className={`${textwhite} ${headingText} text-start text-[42px] sm:text-[55px] w-[100%] sm:w-[75%] font-medium`}
              >
             {t("team.mainHeadingOne")}
                <span className="text-primary-orange "> {t("team.mainHeadingTwo")}</span>
              </h1>
            </div>
            <p
              className={`w-[100%] sm:w-[60%]  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
            >
           {t("team.desc")}
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
            {/* </div> */}

          

          



  {/* <div className={`${container} `}> */}
 
 {/* <div className="flex justify-start sm:justify-center mt-28">
              <h1 className={`${textwhite} text-start sm:text-center ${headingText} sm:text-[42px] w-[100%] sm:w-[75%] font-medium`}>
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
                  <div className={`text-4xl ${tech.colorScheme}`}>
               {tech.icon}
                  </div>

                </div>
              ))}
            </div>
             */}






{/* <div className="grid grid-cols-12 mt-48 gap-5">
    <div className="col-span-12 sm:col-span-3 ">
        <div className="team-achievement-box w-[80%] background-glass py-1 border-2 overflow-hidden relative  border-[#703b34]  rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite} z-50 relative `}>25k+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Projects Completed</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[80%] py-1 border-2 overflow-hidden relative border-[#703b34]  rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite}  z-50 relative hover:text-black`}>25k+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Happy Customer</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[80%] py-1 border-2 overflow-hidden relative border-[#703b34] rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite} z-50 relative hover:text-black`}>10+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Years of Experience</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[80%] py-1 border-2 overflow-hidden relative border-[#703b34] rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite} z-50 relative hover:text-black`}>25k+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Projects Completed</h1>
        </div>
    </div>
</div> */}


          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamLandingPage

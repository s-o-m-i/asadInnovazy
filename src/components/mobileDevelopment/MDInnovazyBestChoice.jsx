import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import FancyCard from '../../ui/FancyCard'
import { bestChoices } from '../../utils/app-dev-best-choice-data'
import { StaticImage } from 'gatsby-plugin-image'
import CallToAction from '../../ui/CallToAction'

const MDInnovazyBestChoice = () => {
  return (
    <>
    <div className={`${container} text-white`}>

    <h1 className={`${headingText} text-start md:text-center mt-28`}>What Makes Innovazay the  <span className={`services_heading_success rounded-full px-4 py-1 text-[27px] sm:text-[32px] text-white`}>Best Choice?</span> 
    </h1>    
    <div className="flex justify-center">

    <p className={`w-[100%] sm:w-[75%] text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
    We design and build app to solve real-world issues and assist businesses to become bigger and better with unified, smooth and exceptional user experience.
  </p>
    </div>
<div className="grid grid-cols-12">

{bestChoices.map((e,i)=>(
    <div className={`sm:col-span-4 col-span-12 ${i===1 && " flex justify-center" || i===2 && "flex justify-center sm:justify-end" || i===0 && "flex justify-center sm:justify-start"}  `}>
       <li className='mt-16'>
    <a href="" className="fancy_card  w-[300px]">
    { e.imagePath === "imageOne" && <StaticImage src="../../assets/images/serviceNice.webp" className='h-[300px]'/>}
    { e.imagePath === "imageTwo" && <StaticImage src="../../assets/images/serviceAnalyze.webp" className='h-[300px]'/>}
    { e.imagePath === "imageThree" && <StaticImage src="../../assets/images/serviceStandOut.webp" className='h-[300px]'/>}
      <div className="text-white h-full flex pt-12 justify-center text-[120px]">


{/* {icon} */}
</div>
      <div className="fancy_card__overlay">
        <div className="fancy_card__header ">
          <svg className="fancy_card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
         
          
         
         <div className="text-white ">

         {e.icon}
         </div>
          <div className="fancy_card__header-text">
            <h3 className={`fancy_card__title ${textwhite} text-xl`}>{e.title}</h3>            
            
          </div>
        </div>
        {/* ${paragraphTextColor} */}
        <p className={`fancy_card__description 
          text-white mt-8
          
          `}>{e.desc}</p>
      </div>
    </a>      
  </li>
    </div>
) )}
</div>

    </div>

    <CallToAction/>

    </>
  )
}

export default MDInnovazyBestChoice
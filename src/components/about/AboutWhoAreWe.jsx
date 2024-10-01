import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import { ImEye } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";

const AboutWhoAreWe = () => {
  return (
    <>
         <div className={`${container} mt-[250px] mb-[200px]`}>
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-12 sm:col-span-6 flex ">
      <div className="moving-border ">
        <div className="w-full h-full bg-[rgba(0,0,0,0.2)] text-white relative overflow-hidden">
        <h1 className={`${headingText} ${textwhite} absolute -bottom-20 text-center left-5`}>Innovazy</h1>
         </div>
      </div>
    </div>
    <div className="w-[100%] col-span-12 sm:col-span-6 sm:mt-0 mt-5">
      <h1 className={`text-3xl font-bold ${textwhite} ${headingText} `}>WHO ARE <span className="text-primary-orange">WE?</span> </h1>
      <div className="h-[3px] bg-primary-orange w-[30%] my-3"/>
      <p className={`${paragraphTextColor} leading-7 text-[16px]`}>
At Innovazy LLC, we are driven by integrity, customer-centricity, and a passion for innovation. Our team specializes in creating customized web and mobile applications, offering cloud solutions on AWS and Azure, and providing top-notch UI/UX design. We are committed to delivering exceptional service and leveraging cutting-edge technology to solve business challenges and drive success.
      </p>
      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-12 sm:col-span-6">
        <div className="flex items-center gap-4">
        <div className="text-3xl text-primary-orange">
        <ImEye />
        </div>
      <h4 className={` font-bold ${textwhite}  `}>Clean Code</h4>
        </div>
      <p className={`${paragraphTextColor} leading-6 text-[14px]`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A placeat hic
        eaque cupiditate pariatur voluptates deleniti iure? Dolor, sed
      </p>
        </div>
        <div className="col-span-12 sm:col-span-6 mt-5 sm:mt-0">
        <div className="flex items-center gap-4">
        <div className="text-3xl text-primary-orange">
        <CgWebsite />
        </div>
      <h4 className={` font-bold ${textwhite}  `}>Modern Design</h4>
        </div>
      <p className={`${paragraphTextColor} leading-6 text-[14px]`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A placeat hic
        eaque cupiditate pariatur voluptates deleniti iure? Dolor, sed
      </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default AboutWhoAreWe
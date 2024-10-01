import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import CallIcon from "../../assets/icons/callIcon.png";
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import { StaticImage } from 'gatsby-plugin-image';
const MDLandingPage = () => {
  return (
    <>
     <div className='homeSectionleftBlob'>
     <div className='homeSectionRightBlob'>
    <div className={`${container} mt-[130px]`}>
           <div className="grid grid-cols-12">
               <div className="col-span-12 sm:col-span-6 ">
                   <div className='mt-8'>

          <h1
               className={`${textwhite}  ${headingText}   uppercase    font-medium`}
               >
              <span className='services-linear'> Mobile Application </span> Development
             </h1>
             <p className={`w-[100%] sm:w-[75%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
             Our highly experienced and skilled expert team ensures to bring our customers the most advanced mobile apps to the user experience of their potential businesses and satisfy more customers.</p>
             <div className="flex flex-wrap gap-3 sm:gap-0 mt-12">
                               <button  aria-label="Get Consultation">
                                   <PrimaryButton btnText="Get Consultation" image={ForwardArrow} imageAlt="Get Consultation" />
                               </button>
                               <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                   <SecondaryButton btnText="Talk to us" image={CallIcon} imageAlt="Talk to us" />
                               </a>
                           </div>
                 </div>
               </div>
               <div className="col-span-6 flex justify-center  [perspective:900px]">
             <StaticImage src='../../assets/images/serviceAppDev.png' alt='web_development' className='w-[80%] hidden sm:block cursor-pointer hover:transform hover:scale-110 transition-transform duration-300'/>

               </div>
           </div>
           </div>
           </div>
           </div>

       
   </>
  )
}

export default MDLandingPage
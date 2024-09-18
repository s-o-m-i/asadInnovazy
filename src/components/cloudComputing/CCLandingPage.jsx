import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import CallIcon from '../../assets/icons/CallIconOrange.png'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import '../../ui/services.css'

const CCLandingPage = () => {
  return (
    <>
      <div className="homeSectionleftBlob  mt-[150px] z-50 ">
      <div className="homeSectionRightBlob  ">
       
         

          <div className="flex justify-center ">
            <div className="flex flex-col items-center">
              <div className="self-end">
                <div className="h-1 w-24 services_heading" />
              </div>

              <h1
                className={`${textwhite}  services_glowing_text text-center uppercase tracking-wider font-[Montserrat-Bold] text-[42px] sm:text-[50px] w-[100%] font-medium`}
              >
       Cloud Computing <br/> Services in USA
              </h1>
             
              <div className="self-start">
                <div className="h-1 w-24 bg-orange-500" />
              </div>
            </div>
          </div>
          <h1
             className={`${textwhite} mt-28 ${headingText}   w-[100%]  font-medium`}
           >
    
       <span className='testi-linear'>  Cloud Computing  </span>   Services
           </h1>

           <p
                  className={`w-[100%] sm:w-[60%] z-10  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                >
            We provide cost effective cloud computing services to enterprises, industrial businesses, organizations and government institutions to help them build efficiency and security in their systems.
                </p>
        
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
               
    </>
  )
}

export default CCLandingPage
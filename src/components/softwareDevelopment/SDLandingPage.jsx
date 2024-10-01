import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import CallIcon from "../../assets/icons/callIcon.png";
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import { StaticImage } from 'gatsby-plugin-image';
const SDLandingPage = () => {
  return (
    <>
     <div className={`${container} mt-[130px]`}>
            <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-6 ">
                    <div className='mt-8'>

           <h1
                className={`${textwhite}  ${headingText}   uppercase    font-medium`}
                >
               <span className='services-linear'> Software Development</span> Services  in USA
              </h1>
              <p className={`w-[100%] sm:w-[75%] my-8 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
              Get a scalable and reliable development of software solutions with skilled and experienced Innovazy experts for browsers, iOS and other devices.</p>
              <div className="flex flex-wrap gap-3 sm:gap-0 mt-10">
                                <button  aria-label="Get Consultation">
                                    <PrimaryButton btnText="Get Consultation" image={ForwardArrow} imageAlt="Get Consultation" />
                                </button>
                                <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                    <SecondaryButton btnText="Talk to us" image={CallIcon} imageAlt="Talk to us" />
                                </a>
                            </div>
                  </div>
                </div>
                <div className="col-span-6 flex justify-center items-center [perspective:900px]">
              <StaticImage src='../../assets/images/s_webdevelopment.png' alt='web_development' className='w-[80%] hidden sm:block cursor-pointer hover:transform hover:scale-110 transition-transform duration-300'/>

                </div>
            </div>
            </div>
    </>
  )
}

export default SDLandingPage
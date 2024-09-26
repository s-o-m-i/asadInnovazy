import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'

import { StaticImage } from 'gatsby-plugin-image';

import TestimonialsSlider from './TestimonialsSlider';
const TestimonialsLandingPage = () => {
  return (
    <>
         
               <div className="homeSectionleftBlob  mt-[150px] z-50 ">
   <div className="homeSectionRightBlob  ">
   
     <div className={`${container}  `}>

    
     <div className="flex justify-center ">
  <div className="flex flex-col items-center">
    
    <div className="self-end">
      <div className="h-1 w-24 services_heading_success" />
    </div>
    
    
    <h1
      className={`${textwhite} text-center uppercase tracking-wider font-[Aeonik-Bold] text-[38px] sm:text-[60px] w-[100%] font-medium`}
    >
      Testim<span className="testi-linear">o</span>nials
    </h1>

    
    <div className="self-start">
      <div className="h-1 w-24 services_heading_success" />
    </div>
  </div>
</div>
           <h1
             className={`${textwhite} mt-28 ${headingText}   w-[100%]  font-medium`}
           >
       What Our<span className='testi-linear'> Client</span> Says
           </h1>

           <p
                  className={`w-[100%] sm:w-[60%] z-10  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                >
              At Innovazy, we deliver cutting-edge IT solutions tailored to solve your unique business challenges. Our team of highly skilled and experienced professionals is dedicated to elevating your business with innovative strategies and advanced technology. By partnering with Innovazy, you not only gain access to top-tier expertise in web application development and business software solutions, but also unlock the potential to drive your business to new heights of success.
                </p>
        
       




<div className="testi_linkedin flex justify-center mt-28 mb-10">

   
   <a href="#*" className={`btn2 testi_a glowing_text hover:text-white py-[7px] px-[10px] sm:py-[30px] sm:px-[50px] `}><StaticImage
                className="w-[30px] "
                src="../../assets/images/linkedin.png"
                alt="Innovative ball"
              />Linkedin</a>
</div>   

<TestimonialsSlider/>

<div className="testi_linkedin flex justify-center mt-28">

   
   <a href="#*" className="btn2 testi_a py-[10px] px-[10px] sm:py-[30px] sm:px-[50px] glowing_text hover:text-white"><StaticImage
                className="w-[30px] "
                src="../../assets/images/upwork.png"
                alt="Innovative ball"
              />Upwork</a>
</div>   
<div className="testi_linkedin flex justify-center mt-28">

   
   <a href="#*" className="btn2 testi_a py-[10px] px-[10px] sm:py-[30px] sm:px-[50px] glowing_text hover:text-white"><StaticImage
                className="w-[30px] "
                src="../../assets/images/freelance.png"
                alt="Innovative ball"
              />Freelancer</a>
</div>   




     </div>
   </div>
 </div>
            
    </>
  )
}

export default TestimonialsLandingPage
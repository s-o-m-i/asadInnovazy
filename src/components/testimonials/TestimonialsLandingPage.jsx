import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import { FaLinkedin } from "react-icons/fa";





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
        
       



{/* 
<div className="testi_linkedin flex justify-center mt-36 mb-12">

   
   <a href="#*" className={`btn2 testi_a glowing_text mb-5 hover:text-white py-[7px] px-[10px] sm:py-[20px] sm:px-[30px] `}>
    

              <FaLinkedin color="#0A66C2" />
              Linkedin
              </a>
</div>    */}
<div className="mt-36">

<TestimonialsSlider/>
</div>




     </div>
   </div>
 </div>
            
    </>
  )
}

export default TestimonialsLandingPage
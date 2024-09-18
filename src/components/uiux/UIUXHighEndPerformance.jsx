import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import SecondaryButton from '../../ui/SecondaryButton'

const UIUXHighEndPerformance = () => {
  return (
    // whiteOrange
    <div className='relative mt-32'>
    <div className="homeSectionleftBlob  ">
         <div className="homeSectionRightBlob  ">
    <div className='mt-28'>
    <h1
             className={`${textwhite} flip-box-header text-center ${headingText}   w-[100%]  font-medium`}
           >
    Ensuring 
       <span className='testi-linear'>    High-end Performance   </span> <br/>  
           </h1>



        <div className="grid grid-cols-12 gap-8 mt-28">
          

            <div className="col-span-12 sm:col-span-4">

    	<div className="box-item">
    <div className="flip-box">
      <div className="flip-box-front text-center" >
        <div className="absolute w-full whitePurple opacity-[.5] h-full "></div>
        <div className="inner color-white">
          {/* <h3 className=" text-white">UX Audit</h3> */}
          <h1
             className={`${textwhite} flip-box-header ${headingText}   w-[100%]  font-medium`}
           >
    
       <span className='testi-linear'>    Accessibility   </span> <br/>  Testing
           </h1>
          <p className={` text-black text-[18px] px-8 mt-2`}>We guarantee to follow Web Content Accessibility Guidelines (WCAG) to improve user experiences with required flexibility and availability while designing all web applications. Our focus is to create and build IT structures in accordance with market standards and user demands.</p>
          
        </div>
      </div>
      <div className="flip-box-back text-center background-custom-image" >
      {/* <div className="absolute w-full whitePurple h-full bg-[rgba(0,0,0,0.5)]"></div> */}
        <div className="inner color-white flex items-center justify-center">
          {/* <h3 className="flip-box-header text-black">Our UX audit aims at gaining a better understanding of UX challenges and help customers to save money on development, increase profitability and observe beforehand about user behaviors. By following this process, we get to serve our clients better. It ensures quality.</h3> */}
          {/* <p className='text-black'>A short sentence describing this callout is.</p> */}
          <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                        <SecondaryButton btnText="Contact Us" />
                                    </a>
        </div>
      </div>
    </div>
	</div>
            </div>

            <div className="col-span-12 sm:col-span-4 ">

<div className="box-item border-2 border-white border-dashed">
<div className="flip-box">
<div className="flip-box-front text-center " >
<div className="absolute w-full background-glass h-full "></div>
<div className="inner color-white">
  {/* <h3 className=" text-white">UX Audit</h3> */}
  <h1
     className={`text-white flip-box-header ${headingText}   w-[100%]  font-medium`}
   >

<span className='testi-linear'>    UX  </span>   Audit
   </h1>
  <p className='text-white text-[18px] px-8 mt-2'>Our UX audit aims at gaining a better understanding of UX challenges and help customers to save money on development, increase profitability and observe beforehand about user behaviors. By following this process, we get to serve our clients better. It ensures quality.</p>
  {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/> */}
</div>
</div>
<div className="flip-box-back text-center" >
<div className="absolute w-full  h-full bg-[rgba(0,0,0,0.5)]"></div>
<div className="inner color-white flex items-center justify-center">
  {/* <h3 className="flip-box-header text-black">Our UX audit aims at gaining a better understanding of UX challenges and help customers to save money on development, increase profitability and observe beforehand about user behaviors. By following this process, we get to serve our clients better. It ensures quality.</h3> */}
  {/* <p className='text-black'>A short sentence describing this callout is.</p> */}
  <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                <SecondaryButton btnText="Contact Us" />
                            </a>
</div>
</div>
</div>
</div>
    </div>

            <div className="col-span-12 sm:col-span-4">

    	<div className="box-item">
    <div className="flip-box">
      <div className="flip-box-front text-center" >
        <div className="absolute w-full whiteBlack opacity-[.5] h-full bg-[rgba(75,76,30,0.5)]"></div>
        <div className="inner color-white">
          {/* <h3 className=" text-white">UX Audit</h3> */}
          <h1
             className={`${textwhite} flip-box-header ${headingText}   w-[100%]  font-medium`}
           >
    
       <span className='testi-linear'>    Usability   </span>   Testing
           </h1>
          <p className='text-black text-[18px] px-8 mt-2'>Our experts are highly skilled and experienced in conducting usability testing of all UI/UX designs. It looks into both qualitative and quantitative data information regarding the satisfaction of users with the product to help clients with bug-free user experiences for usability testing.</p>
          {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/> */}
        </div>
      </div>
      <div className="flip-box-back text-center" >
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
        <div className="inner color-white flex items-center justify-center">
          {/* <h3 className="flip-box-header text-black">Our UX audit aims at gaining a better understanding of UX challenges and help customers to save money on development, increase profitability and observe beforehand about user behaviors. By following this process, we get to serve our clients better. It ensures quality.</h3> */}
          {/* <p className='text-black'>A short sentence describing this callout is.</p> */}
          <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                        <SecondaryButton btnText="Contact Us" />
                                    </a>
        </div>
      </div>
    </div>
	</div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default UIUXHighEndPerformance
import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import SecondaryButton from '../../ui/SecondaryButton'
import { FaCheck } from "react-icons/fa6";
const UIUXHighEndPerformance = () => {
  return (
    // whiteOrange
    <div className=' mt-32'>
    <div className="homeSectionleftBlob  ">
         <div className="homeSectionRightBlob  ">
    <div className='mt-28'>
    <div class="styled_one">
    <h1
             className={`${textwhite}  text-center ${headingText}   w-[100%]  font-medium`}
           >
    Ensuring 
       <span className='testi-linear'>    High-end Performance   </span> <br/>  
           </h1>
           </div>



        

        <div className="grid grid-cols-12 gap-10 mt-16 sm:mt-22 w-full">


<div className="hidden sm:flex absolute gap-5 justify-end left-[50%] ">
  <div className="w-[50px] sm:w-[300px] h-[50px] sm:h-[300px] bg-[#2c242e] mt-24 rounded-full animate-move"></div>
  <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#a1a49c] rounded-full absolute -left-[300px] bottom-0 animate-move-two"></div>
</div>

{/* First Column */}
<div className="col-span-12 sm:col-span-6 w-full">
  <div className="relative">
    <div className="flex absolute gap-5 justify-end animate-move">
      <div className="w-[40px] sm:w-[100px] h-[40px] sm:h-[100px] bg-[#c96547] mt-24 rounded-full"></div>
      <div className="w-[40px] sm:w-[150px] h-[40px] sm:h-[150px] bg-[#c72aa0] rounded-full"></div>
    </div>

    <div className="my_glassMorhism background-glass h-[320px] w-[350px] sm:w-full sm:h-[420px] flex items-center  px-4 sm:py-6  rounded-[16px]">
      <div>
    <h1 className='text-white text-center text-3xl'>  Accessibility
    Testing</h1>
    <p className='text-white mt-5 text-center'>We guarantee to follow Web Content Accessibility Guidelines (WCAG) to improve user experiences with required flexibility and availability while designing all web applications. Our focus is to create and build IT structures in accordance with market standards and user demands.</p>
      </div>
    </div>
  </div>
</div>

{/* Second Column */}
<div className="col-span-12 sm:col-span-6 w-full">
  <div className="relative w-full">
    <div className="flex gap-5 justify-end absolute">
      <div className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] bg-[#3a3939] mt-24 rounded-full animate-move"></div>
      <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#000000] rounded-full animate-move"></div>
    </div>

    {/* First Subsection */}
    <div className="my_glassMorhism background-glass relative h-[200px] sm:h-[200px] sm:w-full w-[350px] px-4 sm:py-6 flex items-center rounded-[16px]">
    <div>
    <h1 className='text-white text-2xl '>  Usability
    Testing</h1>
    <p className={`mt-5 ${paragraphTextColor}`}>Our experts are highly skilled and experienced in conducting usability testing of all UI/UX designs. It looks into both qualitative and quantitative data information regarding the satisfaction of users with the product to help clients with bug-free user experiences for usability testing.</p>
      </div>
    </div>

    {/* Second Subsection */}
    <div className="my_glassMorhism background-glass relative h-[200px] sm:h-[200px] sm:w-full mt-5 w-[350px] px-4 sm:py-6 flex items-center rounded-[16px]">
      <div>
      <div>
    <h1 className='text-white text-2xl'>  UX
    Audit</h1>
    <p className={`mt-5 ${paragraphTextColor}`}>Our UX audit aims at gaining a better understanding of UX challenges and help customers to save money on development, increase profitability and observe beforehand about user behaviors. By following this process, we get to serve our clients better. It ensures quality.</p>
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
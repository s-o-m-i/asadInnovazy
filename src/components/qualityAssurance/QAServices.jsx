import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'

import { FaCheck } from "react-icons/fa6";
const QAServices = () => {
  return (
    <>
 <div className="flex sm:justify-center">
        <h1
             className={`${textwhite} w-full sm:w-[75%] mt-28 ${headingText} text-start sm:text-center  w-[100%]  font-medium`}
           >
      How Innovazay Ensures Successful Quality 
       <span className=''>  Assurance and  Testing
     </span>   
           </h1>
           </div>


    <div className="grid grid-cols-12 mt-20 ">
        <div className="sm:col-span-6 col-span-12 ">
    <StaticImage src='../../assets/images/qa-service-one.webp' className=' rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'/>
        </div>
        <div className="sm:col-span-6 col-span-12 text-white px-8 pb-4 pt-8 background-glass my_glassMorhism rounded-tr-lg">
        <h1 className={`text-3xl text-white  capitalize`}> <span className=''>Manual </span>testing
        </h1>
    <p className={`${paragraphTextColor} text-[16px] mt-4`}>Manual testing targets personal feedback about the feel of the products and analyze the user interface and usability by performing several tests on various devices. We have got the best team for it as it follows vulnerability which are impossible to detect manually.</p>

    <div  className="flex left-pointer items-center  gap-4 text-white mt-8 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}>Detects user interface issues</h5>
          <div className="bg-gray-500 b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-white mt-3 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}> Facilitate actionable testing outcomes for unstable but new soft wares</h5>
          <div className="bg-gray-500 b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-white mt-3 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}> Allows identifying blockages in the initial development stages</h5>
          <div className="bg-gray-500 b-line  mt-2 h-[3px] w-0 opacity-[0]" />
        </div>
      </div>

        </div>
    </div>
    <div className="grid grid-cols-12  mt-14 sm:mt-0">
       
        <div className="sm:col-span-6 order-2 sm:order-1
         col-span-12 background-glass text-white px-8 pb-4 pt-8  my_glassMorhism rounded-bl-lg">
    <h1 className={`text-3xl text-white  capitalize`}> <span className=''>Automated </span>testing
    </h1>
    <p className={`${paragraphTextColor} text-[16px] mt-4`}>We encourage our clients to invest in automated testing as it covers all types of software functionality on multiple platforms. It helps you to get flawless products with quality assurance and provide your customers and employees with smooth user interface.</p>

    <div  className="flex left-pointer items-center  gap-4 text-white  mt-8 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}> It helps you to save your resources with its repetitive testing to ensure quality.</h5>
          <div className="bg-gray-500  b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-white mt-3 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}> Eradicates all human errors and ensures the reliability of the product.</h5>
          <div className="bg-gray-500  b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-white  mt-3 w-full">
     <FaCheck />
        <div>
          <h5 className={`${paragraphTextColor} text-[16px]`}> Allows engineers to perform the testing anywhere anytime easily and get log test results.</h5>
          <div className="bg-gray-500  b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>

        </div>
        <div className="sm:col-span-6 col-span-12  order-1 sm:order-2">
    <StaticImage src='../../assets/images/qa-service-two.webp' className='sm:rounded-br-lg rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-tl-none'/>
        </div>
    </div>
    </>
  )
}

export default QAServices
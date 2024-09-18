import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { headingText, paragraphTextColor } from '../../styles/styles'
import { FaHandPointRight } from 'react-icons/fa'

const QAServices = () => {
  return (
    <>
    <div className="grid grid-cols-12 mt-28 ">
        <div className="sm:col-span-6 col-span-12 ">
    <StaticImage src='../../assets/images/qa-service-one.webp'/>
        </div>
        <div className="sm:col-span-6 col-span-12 text-white px-8 background-glass">
        <h1 className={`${headingText} text-white  `}> <span className='testi-linear'>Manual </span>testing
        </h1>
    <p className={`${paragraphTextColor} mt-4`}>Manual testing targets personal feedback about the feel of the products and analyze the user interface and usability by performing several tests on various devices. We have got the best team for it as it follows vulnerability which are impossible to detect manually.</p>

    <div  className="flex left-pointer items-center  gap-4 text-primary-orange mt-8 w-full">
        <FaHandPointRight />
        <div>
          <h5 className={`${paragraphTextColor} text-[18px]`}>Detects user interface issues</h5>
          <div className="bg-primary-orange b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-primary-orange mt-3 w-full">
        <FaHandPointRight />
        <div>
          <h5 className={`${paragraphTextColor} text-[18px]`}> Facilitate actionable testing outcomes for unstable but new soft wares</h5>
          <div className="bg-primary-orange b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-primary-orange mt-3 w-full">
        <FaHandPointRight />
        <div>
          <h5 className={`${paragraphTextColor} text-[18px]`}> Allows identifying blockages in the initial development stages</h5>
          <div className="bg-primary-orange b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>

        </div>
    </div>
    <div className="grid grid-cols-12  ">
       
        <div className="sm:col-span-6 col-span-12 background-glass text-white px-8 py-4">
    <h1 className={`${headingText} text-white  `}> <span className='testi-linear'>Automated </span>testing
    </h1>
    <p className={`${paragraphTextColor} mt-4`}>We encourage our clients to invest in automated testing as it covers all types of software functionality on multiple platforms. It helps you to get flawless products with quality assurance and provide your customers and employees with smooth user interface.</p>

    <div  className="flex left-pointer items-center  gap-4 text-primary-orange mt-8 w-full">
        <FaHandPointRight />
        <div>
          <h5 className={`${paragraphTextColor} text-[18px]`}> It helps you to save your resources with its repetitive testing to ensure quality.</h5>
          <div className="bg-primary-orange b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-primary-orange mt-3 w-full">
        <FaHandPointRight />
        <div>
          <h5 className={`${paragraphTextColor} text-[18px]`}> Eradicates all human errors and ensures the reliability of the product.</h5>
          <div className="bg-primary-orange b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    <div  className="flex left-pointer items-center gap-4 text-primary-orange mt-3 w-full">
        <FaHandPointRight />
        <div>
          <h5 className={`${paragraphTextColor} text-[18px]`}> Allows engineers to perform the testing anywhere anytime easily and get log test results.</h5>
          <div className="bg-primary-orange b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>

        </div>
        <div className="sm:col-span-6 col-span-12 ">
    <StaticImage src='../../assets/images/qa-service-two.webp'/>
        </div>
    </div>
    </>
  )
}

export default QAServices
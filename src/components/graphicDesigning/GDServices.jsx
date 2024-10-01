import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import ServicesBusinessCard from '../../ui/ServicesBusinessCard'
import { graphicServices } from '../../utils/graphice-services-data'

const GDServices = () => {
  return (
    <>
        <div className='relative'>
            <div className='clientGradientBlogTop'>
                <div className='clientGradientBlogBottom'>
                    <div className={`${container} mt-[120px]`}>
                    <h1
             className={`${textwhite} mt-28 ${headingText} text-center  w-[100%]  font-medium`}
           >
    
       <span className=''>  Graphic Designing </span>   Services
           </h1>

                        <p className={`w-[100%]  text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
                        At Innovazy, you get the most advanced and diverse options for a modern interface mobile app for your business to stand from your competitors.

                            </p>
                        <div className="mt-14"></div>
    <ServicesBusinessCard data={graphicServices}/>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default GDServices
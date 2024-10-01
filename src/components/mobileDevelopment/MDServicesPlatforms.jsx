import React from 'react'
import ServicesBusinessCard from '../../ui/ServicesBusinessCard'
import { appDevServices } from '../../utils/app-development-service-data'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'

const MDServicesPlatforms = () => {
  return (
    <>
     <div className='relative'>
            <div className='clientGradientBlogTop'>
                <div className='clientGradientBlogBottom'>
                    <div className={`${container} mt-[120px]`}>
                        <h1 className={`${textwhite} ${headingText} mx-auto w-[100%] md:w-[55%] text-start md:text-center`}>SERVICES AND PLATFORMS</h1>
                        <p className={`w-[100%]  text-start sm:text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
                        At Innovazy, you get the most advanced and diverse options for a modern interface mobile app for your business to stand from your competitors.

                            </p>
                        <div className="mt-14"></div>
    <ServicesBusinessCard data={appDevServices}/>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default MDServicesPlatforms
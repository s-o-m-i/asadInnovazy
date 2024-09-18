import React from 'react'
import { headingText, paragraphTextColor } from '../../styles/styles'
import { StaticImage } from 'gatsby-plugin-image'
import { FaHandPointRight } from 'react-icons/fa'
import { cloudComputingServices } from '../../utils/cloud-computing-services'

const CCServices = () => {
  return (
    <>
                   <h1 className={`${headingText} mt-28 text-white text-start md:text-center`}>Cloud Computing    <span className={`services_heading rounded-full px-4 py-1 text-[27px] sm:text-[32px] text-white`}>Services </span>  
</h1>    
<div className="flex justify-center">

<p
                  className={`w-[100%] sm:w-[60%] z-10 text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                  >
           Our experts put all their efforts to remain at forefront in cloud evolution through the adoption of virtual and converged solutions. It provides with a defined model that improves user experiences.
                </p>
                    </div>
                    {/* border-b-2 border-primary-orange pb-5 border-dashed */}
<div className="flex justify-between mt-28 gap-20">
    <div className='w-[50%]'>

    <StaticImage src='../../assets/images/graphicDesignArt.webp' className='h-full w-full'/>
    </div>
    <div className="graphic_points w-[50%] ">
        <div className='w-full'>

        {cloudComputingServices.map((item, index) => (
      <div key={index} className="flex left-pointer items-center gap-4 text-primary-orange mt-3 w-full">
        <FaHandPointRight />
        <div>
          <h5 className={`${paragraphTextColor} text-[18px]`}>{item.title}</h5>
          <div className="bg-primary-orange b-line  mt-2 h-[3px] w-0 opacity-[.8]" />
        </div>
      </div>
    ))}



   
</div>

    </div>
</div>
    </>
  )
}

export default CCServices
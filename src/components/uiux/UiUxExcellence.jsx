import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import Spotlight from '../../ui/SpotlightEffect'
import { cloudComputingAccompanies } from '../../utils/cloud-computing-data'
import { uiuxExcellence } from '../../utils/uiux-excellence-data'


const UiUxExcellence = () => {
  return (
    <>
    <h1
    className={`${textwhite} mt-28 ${headingText} text-center  w-[100%]  font-medium`}
    >

<span className='testi-linear'> How we achieve Excellence in </span>   UI/UX Designing?
  </h1>
  <div className="flex justify-center">
               <p className={`w-[100%] sm:w-[65%] text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
               Our passionate and dedicated team help us to provide our customers with excellent UI/UX designs. Hire us and start your success journey with our quality focused services.


                   </p>
                   </div>
                   <Spotlight data={uiuxExcellence} />
                   </>
  )
}

export default UiUxExcellence
import React from 'react'
import { container, headingText, paragraphTextColor } from '../../styles/styles'
import { bestChoices } from '../../utils/app-dev-best-choice-data'

import CallToAction from '../../ui/CallToAction'
import CustomSpotlight from '../../ui/CustomSpotlight'

const MDInnovazyBestChoice = () => {
  return (
    <>
    <div className={`${container} text-white`}>

    <h1 className={`${headingText} text-start md:text-center mt-28`}>What Makes Innovazay the  Best Choice?
    </h1>    
    <div className="flex justify-center">
    <p className={`w-[100%] sm:w-[75%] text-center  ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
    We design and build app to solve real-world issues and assist businesses to become bigger and better with unified, smooth and exceptional user experience.
  </p>
    </div>
    <CustomSpotlight data={bestChoices}/>
<div className="grid grid-cols-12">



</div>

    </div>
<div className='mt-8'>

    <CallToAction/>
</div>

    </>
  )
}

export default MDInnovazyBestChoice
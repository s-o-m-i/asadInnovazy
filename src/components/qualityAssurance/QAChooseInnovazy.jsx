import React from 'react'
import Spotlight from '../../ui/SpotlightEffect'
import { qaChooseData } from '../../utils/qa-choose-innov-data'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'

const QAChooseInnovazy = () => {
  return (
    <>
    <h1
    className={`${textwhite} mt-28 ${headingText} text-center  w-[100%]  font-medium`}
    >

<span className=''> Why Choose </span>   Innovazy?
  </h1>
  <div className="flex justify-center">
               <p className={`w-[100%] sm:w-[65%] text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
               We are the hub of advanced IT products with our focus on growth and up gradation with Modern soft solutions to make sure our clients get better and progressive end-products for the vigor of their businesses.




                   </p>
                   </div>
<Spotlight data={qaChooseData}/>
   
    </>
  )
}

export default QAChooseInnovazy
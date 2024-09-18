import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'

const QASuccessfulInsurance = () => {
  return (
    <>
    <div className="flex sm:justify-center">
        <h1
             className={`${textwhite} w-full sm:w-[75%] mt-28 ${headingText} text-center  w-[100%]  font-medium`}
           >
      How Innovazay Ensures Successful Quality 
       <span className='testi-linear'>  Assurance and  Testing
     </span>   
           </h1>
           </div>

<div className="grid grid-cols-12 mt-28">
    <div className="col-span-4">
           <div className="card-box  whiteBlack px-4 py-24 text-black custom-shadow ">
           <h1
             className={` text-[32px] text-center  font-medium`}
           >
    Guaranteed Quality and Security Testing

      
           </h1>
           <p className={`text-gradient-effect-rev mt-2 text-center`}>We have a quality certified management system that allows our professionals to test IT solutions on precision-oriented results. We guarantee our customers with quality in performance, functionality and security for their products.

</p>
           </div>

    </div>
    <div className="col-span-4">
    <div className="card-box background-glass  shadow-[0_10px_20px_rgba(255,255,255,_0.7)] px-4 py-24 text-white">
           <h1
             className={` text-[32px] text-center  font-medium`}
           >
    Guaranteed Quality and Security Testing

      
           </h1>
           <p className={`${paragraphTextColor} mt-2 text-center`}>We have a quality certified management system that allows our professionals to test IT solutions on precision-oriented results. We guarantee our customers with quality in performance, functionality and security for their products.

</p>
           </div>

    </div>
    <div className="col-span-4">
    <div className="card-box blackWhite px-4 py-24 text-black custom-shadow-right">
           <h1
             className={` text-[32px] text-center  font-medium`}
           >
    Guaranteed Quality and Security Testing

      
           </h1>
           <p className={`text-gradient-effect mt-2 text-center`}>We have a quality certified management system that allows our professionals to test IT solutions on precision-oriented results. We guarantee our customers with quality in performance, functionality and security for their products.

</p>
           </div>
    </div>
</div>
    </>
  )
}

export default QASuccessfulInsurance
import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'

const GDProcess = () => {
  return (
    <>
    
    <div className="flex items-center flex-col sm:flex-row justify-between mt-28 sm:mt-0">
    <div className='border-r-2 border-primary-orange border-dashed sm:mr-8 '>
            <h1
                className={`${textwhite}  text-[38px] w-[100%] sm:w-[75%] font-medium`}
              >
         Our   <span className="text-primary-orange text-[35px]"> Process
             </span>
              </h1>

              <p className={`w-[100%] sm:w-[70%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
              Innovazy believes in providing the world with creative and innovative digital art through graphic designing services in a collaborative environment where transparency is foremost than anything else while reporting to our clients with each step.
                      </p>
    </div>

    <div>
    <div className=' flex sm:flex-row flex-col items-center gap-5'>
        <div className="dev-circle border-2 rounded-full border-primary-orange border-dashed px-8 overflow-hidden  w-[280px] h-[280px] text-center mt-28">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>01</h1>
            <h1 className={` ${textwhite} `}>Research</h1>
            <p className={`w-[100%]  mt-3 ${paragraphTextColor} text-[12px] `}>
            Our experts use modern, efficient development methods to deliver high-quality, cost-effective web solutions, enhancing customer retention and satisfaction.
                      </p>
        </div>
        <div className="dev-circle border-2 rounded-full border-primary-orange border-dashed px-5 overflow-hidden w-[300px] h-[300px] text-center">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>02</h1>
            <h1 className={` ${textwhite} `}>Planning</h1>
            <p className={`w-[100%]  mt-5 ${paragraphTextColor} text-[12px] `}>
            Our experts focus on a modern and speedy development methodology to achieve quality in timely and cost-effective web solutions which leads to improved customer retention and contentment.
                      </p>
        </div>
    </div>

    <div className=' flex sm:flex-row flex-col  items-center gap-5'>
        <div className="dev-circle border-2 rounded-full border-primary-orange border-dashed px-8 overflow-hidden w-[280px] h-[280px] text-center mt-28">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>03</h1>
            <h1 className={` ${textwhite} `}>Execution</h1>
            <p className={`w-[100%]  mt-3 ${paragraphTextColor} text-[12px] `}>
            Our experts use modern, efficient development methods to deliver high-quality, cost-effective web solutions, enhancing customer retention and satisfaction.
                      </p>
        </div>
        <div className="dev-circle border-2 rounded-full border-primary-orange border-dashed px-5 overflow-hidden w-[300px] h-[300px] text-center">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>04</h1>
            <h1 className={` ${textwhite} `}>Performance Testing</h1>
            <p className={`w-[100%]  mt-5 ${paragraphTextColor} text-[12px] `}>
            Our experts focus on a modern and speedy development methodology to achieve quality in timely and cost-effective web solutions which leads to improved customer retention and contentment.
                      </p>
        </div>
    </div>
    </div>



</div>

    </>
  )
}

export default GDProcess
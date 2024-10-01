import React from 'react'
import { container, headingText } from '../../styles/styles'
import { developmentMethodData } from '../../utils/development-method-data';
import CustomSpotlight from '../../ui/CustomSpotlight';
const SDDevelopment = () => {
  return (
    <>
      <div className={`${container} mt-[130px] text-white`}>
      <div class="styled_one">
      <h1 className={`${headingText} text-start md:text-center`}>The Development  Method <br className='hidden sm:block'/>  <span className={`rounded-full sm:px-4 py-1 text-[32px] sm:text-[38px] text-white`}>We Follow </span> 
      </h1>   
      </div>



<CustomSpotlight data={developmentMethodData}/>
     

      </div>
    </>
  )
}

export default SDDevelopment
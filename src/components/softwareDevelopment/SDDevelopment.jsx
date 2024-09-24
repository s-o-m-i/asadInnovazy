import React from 'react'
import { container, headingText } from '../../styles/styles'
import { ArcCard } from '../TiltCard/ArcCard'
import { PiTreeStructureFill } from "react-icons/pi";
import { developmentMethodData } from '../../utils/development-method-data';
const SDDevelopment = () => {
  return (
    <>
      <div className={`${container} mt-[130px] text-white`}>
      <h1 className={`${headingText} text-start md:text-center`}>The Development  Method <br className='hidden sm:block'/>  <span className={`services_heading_success rounded-full px-4 py-1 text-[32px] sm:text-[38px] text-white`}>We Follow </span> 
      </h1>   



      <div className="grid grid-cols-12 gap-4 mt-28">

        {developmentMethodData.map((e,i)=> (

<div className=" col-span-12 sm:col-span-4">
<ArcCard name={e.name} desc={e.desc} icon={e.icon} />
</div>
        ))}
</div>

      </div>
    </>
  )
}

export default SDDevelopment
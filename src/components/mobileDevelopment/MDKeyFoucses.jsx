import React from 'react'
import { keyFocusesData } from '../../utils/app-dev-key-focuses-data'
import Spotlight from '../../ui/SpotlightEffect'
import { container, headingText } from '../../styles/styles'
const MDKeyFoucses = () => {
  return (
    <>
    <div className={`${container}`}>
    <h1 className={`${headingText} text-white mt-28 text-start md:text-center`}>Our Key  <span className="services_heading_success rounded-full px-4 py-1 opacity-[.9] text-[30px]  text-white">Focuses</span> 
    </h1>    
     <Spotlight data={keyFocusesData} />
    </div>
    </>
  )
}

export default MDKeyFoucses
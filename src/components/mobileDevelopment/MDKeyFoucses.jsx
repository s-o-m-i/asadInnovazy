import React from 'react'
import { keyFocusesData } from '../../utils/app-dev-key-focuses-data'
import Spotlight from '../../ui/SpotlightEffect'
import { container, headingText } from '../../styles/styles'
const MDKeyFoucses = () => {
  return (
    <>
    <div className={`${container}`}>
    
    <h1 className={`${headingText} mt-28 text-white text-start md:text-center`}>Our Key  Focuses
    </h1>    
    
     <Spotlight data={keyFocusesData} />
    </div>
    </>
  )
}

export default MDKeyFoucses
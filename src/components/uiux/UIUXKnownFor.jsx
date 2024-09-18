import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import ServicesBusinessCard from '../../ui/ServicesBusinessCard'
import { cloudComputingClients } from '../../utils/cloud-computing-clients-data'
import { uiuxknownFor } from '../../utils/uiux-knownfor-data'
const UIUXKnownFor = () => {
  return (
    <>
     <h1
    className={`${textwhite} mt-28 ${headingText} text-center  w-[100%]  font-medium`}
    >
What we are 
<span className='testi-linear'>  known for?</span>   
  </h1>
  <div className="flex justify-center">

  <p className={`${paragraphTextColor} w-full sm:w-[65%] text-center mt-5`}>Hire us and get attached to our highly technical and experienced team of professionals for amazing UI/UX designs for all types of solutions.
</p>
  </div>


<div className="mt-12">

  <ServicesBusinessCard data={uiuxknownFor}/>
</div>
</>
  )
}

export default UIUXKnownFor
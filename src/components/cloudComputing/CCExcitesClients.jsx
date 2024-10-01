import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import ServicesBusinessCard from '../../ui/ServicesBusinessCard'
import { cloudComputingClients } from '../../utils/cloud-computing-clients-data'
const CCExcitesClients = () => {
  return (
    <>
     <h1
    className={`${textwhite} mt-28 ${headingText} text-start sm:text-center  w-[100%]  font-medium`}
    >

<span className=''>  Things that Excite Our </span>   Clients
  </h1>
  <p className={`${paragraphTextColor} text-start sm:text-center mt-5`}>Our clients are a family and we treat them we utmost comfort and convenience.</p>

<div className="mt-12">

  <ServicesBusinessCard data={cloudComputingClients}/>
</div>
    </>
  )
}

export default CCExcitesClients
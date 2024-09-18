import React from 'react'
import { headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import Spotlight from '../../ui/SpotlightEffect'
import { cloudComputingAccompanies } from '../../utils/cloud-computing-data'

const CCAccompanies = () => {
  return (
    <>
    <h1
    className={`${textwhite} mt-28 ${headingText} text-center  w-[100%]  font-medium`}
    >

<span className='testi-linear'>  What Accompanies </span>   Cloud Computing
  </h1>

               <p className={`w-[100%]  text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
               Cloud computing brings a lot of benefits to businesses and ensure more security and safety of databases.
                   </p>
                   <Spotlight data={cloudComputingAccompanies} />
      </>

  )
}

export default CCAccompanies
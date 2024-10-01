import React from 'react'


import { headingText,  textwhite } from '../../styles/styles'

import { unitingWithUs } from '../../utils/dev-uniting-data';
import SDCard from '../softwareDevelopment/SDCard';


const UnitingWithUs = () => {
  return (
   
  
   
  
<>


<div className='homeSectionleftBlob'>
     <div className='homeSectionRightBlob'>
    <div className='mt-32'>
          <div class="styled_one mb-28">
    <h1 className={`${textwhite} ${headingText} font-medium  mx-auto w-[100%] text-center`}> <span className='  '> Uniting </span> With Us</h1>
    </div>
{unitingWithUs.map((x,i) => {
                                return <div key={i} className='mb-8'>
                                    <SDCard number={x.number} heading={x.heading} subHeading={x.subHeading} description={x.description} />
                                </div>;
                            })}
</div>
</div>
</div>


</>
  )
}

export default UnitingWithUs
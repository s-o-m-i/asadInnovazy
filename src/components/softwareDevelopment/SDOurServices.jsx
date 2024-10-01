import React from 'react'
import { container, headingText, textwhite } from '../../styles/styles'
import { clientsBusinessArray } from '../../utils/client-business-data';
import SDCard from './SDCard';
import Spotlight from '../../ui/SpotlightEffect';

import { customSoftwareData } from '../../utils/custom-software-data';
import { SDServices } from '../../utils/our-services-soft-dev-data';

const SDOurServices = () => {
  return (
    <>
    <div className={`${container} mt-[130px] text-white`}>




<div className='relative'>
            <div className=''>
                <div className=''>
                    <div className={` mt-[120px]`}>
<h1 className={`${headingText} text-start md:text-center`}>Our Services Under <br/><span className={`rounded-full px-4 py-1 text-[27px] sm:text-[45px] text-white `}>Software Development</span> 
</h1>    


                     
                        <div className="mt-14">
                            {SDServices.map((x,i) => {
                                return <div key={i} className='mb-8'>
                                    <SDCard number={x.number} heading={x.heading} subHeading={x.subHeading} description={x.description} />
                                </div>;
                            })}
                        </div>

                        <div class="styled_one mt-28">
                        <h1 className={`${headingText}   text-start md:text-center`}>Custom Software    <span className="">Solutions Services</span> 
                        </h1>    
</div>
                        <Spotlight data={customSoftwareData} />
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default SDOurServices
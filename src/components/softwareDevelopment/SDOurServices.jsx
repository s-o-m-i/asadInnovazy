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
            <div className='clientGradientBlogTop'>
                <div className='clientGradientBlogBottom'>
                    <div className={` mt-[120px]`}>
<h1 className={`${headingText} text-start md:text-center`}>Our Services Under     <span className={`services_heading rounded-full px-4 py-1 text-[27px] sm:${headingText} text-white`}>Software Development</span> 
</h1>    
                     
                        <div className="mt-14">
                            {SDServices.map((x,i) => {
                                return <div key={i} className='mb-8'>
                                    <SDCard number={x.number} heading={x.heading} subHeading={x.subHeading} description={x.description} />
                                </div>;
                            })}
                        </div>


                        <h1 className={`${headingText}  mt-28 text-start md:text-center`}>Custom Software    <br/> <span className="services_heading rounded-full px-4 py-1 opacity-[.9] text-[30px]  text-white">Solutions Services</span> 
                        </h1>    

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
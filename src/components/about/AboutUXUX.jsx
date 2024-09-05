import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import PrimaryButton from '../../ui/PrimaryButton'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const AboutUXUX = () => {
  return (
    <>
         <div className='relative'>
            <div className='clientGradientBlogTop'>
                <div className=''>
                    <div className={`${container} mt-[120px]`}>
                        <h1 className={`${textwhite} ${headingText} mx-auto w-[100%] md:w-[55%] text-start md:text-center`}><span className="text-primary-orange">UI/UX</span> Techniques</h1>
                        <div className="mt-12">
                     
<div className=" h-[500px] flex-col sm:flex sm:flex-row items-center justify-between p-4 px-5">
<div className="w-[100%] lg:w-[60%]">
<p className={`w-[100%] sm:w-[60%]  ${paragraphTextColor} leading-7 text-[16px]  `}>We develop customize web designs to meet the demands and needs of all types of customers, it includes both small custom design websites to highly advanced online stores to make it evident that we are 360 degree full scale custom software development company. We got our clients secured as our creative team discuss the structure by giving innovative ideas and suggestion.</p>
<div className=" mt-16">

<Link to='/services'>
                    <PrimaryButton btnText="Explore Services" image={ForwardArrow} imageAlt="Get Consultation" />
                </Link>
</div>

</div>
<div className="w-[40%]">

<StaticImage
                className="h-[100%] w-[100%] hidden md:block z-10 cursor-pointer hover:transform hover:scale-110 transition-transform duration-300"
                src="../../assets/images/UIUX.png"
                alt="Innovative ball"
              />
</div>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUXUX
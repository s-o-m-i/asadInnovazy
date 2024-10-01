import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import PrimaryButton from '../../ui/PrimaryButton'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import { Link } from 'gatsby';
import CustomSpotlight from '../../ui/CustomSpotlight';
import { whyChooseUs } from '../../utils/about-us-choose';

const AboutChooseUs = () => {
  return (
    <>
        <div className={`${container} mt-[150px]`}>
  <h1 className={`${textwhite} ${headingText} w-[100%] text-start md:text-center`}>Why Choose Us?</h1>
  <p className={`w-[100%] md:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-start md:text-center text-[14px] sm:text-[16px] leading-7`}>Take your businesses and organizations to another level by taking our development and design services by adding automatic and easy user experiences to your existing structures and new start-ups.</p>
<CustomSpotlight data={whyChooseUs}/>
  <div className='text-center mt-16'>
                <Link to='/services'>
                    <PrimaryButton btnText="Explore Services" image={ForwardArrow} imageAlt="Get Consultation" />
                </Link>
            </div>

  </div>



    </>
  )
}

export default AboutChooseUs
import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import PrimaryButton from '../../ui/PrimaryButton'
import { ArcCard } from '../TiltCard/ArcCard'
import { PiTreeStructureFill } from "react-icons/pi";
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import { Link } from 'gatsby';

const AboutChooseUs = () => {
  return (
    <>
        <div className={`${container} mt-[132px]`}>
  <h1 className={`${textwhite} ${headingText} w-[100%] text-start md:text-center`}>Why Choose Us?</h1>
  <p className={`w-[100%] md:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-start md:text-center text-[14px] sm:text-[16px] leading-7`}>Take your businesses and organizations to another level by taking our development and design services by adding automatic and easy user experiences to your existing structures and new start-ups.</p>
  <div className="grid grid-cols-12 gap-4 mt-28">
<div className=" col-span-12 sm:col-span-4">
<ArcCard name="Modern Structure" desc="We ensure that in all our end products and processing, you get to see the modern and advanced scheme that the world needs in order to progress. 🐐" icon={<PiTreeStructureFill />} />
</div>
<div className=" col-span-12 sm:col-span-4">
<ArcCard name="Artistic Design" desc="Our designs are creative which helps businesses to make a distinction among competitors. Our designs are innovative digital art." icon={<PiTreeStructureFill />} />
</div>
<div className=" col-span-12 sm:col-span-4">
<ArcCard name="24/7 Support" desc="We have a caring customer support system which is available 24/7 so you can reach us the moment you feel uncomfortable." icon={<PiTreeStructureFill />} />
</div>
<div className=" col-span-12 sm:col-span-4">
<ArcCard name="Modern Structure" desc="We ensure that in all our end products and processing, you get to see the modern and advanced scheme that the world needs in order to progress. 🐐" icon={<PiTreeStructureFill />} />
</div>
<div className=" col-span-12 sm:col-span-4">
<ArcCard name="Artistic Design" desc="Our designs are creative which helps businesses to make a distinction among competitors. Our designs are innovative digital art." icon={<PiTreeStructureFill />} />
</div>
<div className=" col-span-12 sm:col-span-4">
<ArcCard name="24/7 Support" desc="We have a caring customer support system which is available 24/7 so you can reach us the moment you feel uncomfortable." icon={<PiTreeStructureFill />} />
</div>
  </div>

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
import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import CallIcon from '../../assets/icons/CallIconOrange.png'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import '../../ui/services.css'
import { StaticImage } from 'gatsby-plugin-image';
import { FaHandPointRight } from "react-icons/fa";
import GDServices from '../../components/graphicDesigning/GDServices';
import CallToAction from '../../ui/CallToAction';
import GDProcess from '../../components/graphicDesigning/GDProcess';

const GraphicsDesign = () => {
    return (
     <>
       <div className="homeSectionleftBlob  mt-[150px] z-50 ">
      <div className="homeSectionRightBlob  ">
        <div className={`${container} mt-[130px]`}>
         

          <div className="flex justify-center ">
            <div className="flex flex-col items-center">
              <div className="self-end">
                <div className="h-1 w-24 services_heading_success" />
              </div>

              <h1
                className={`${textwhite}  services_glowing_text text-center uppercase tracking-wider font-[Montserrat-Bold] text-[42px] sm:text-[50px] w-[100%] font-medium`}
              >
          Graphics Design <br/> Services in USA
              </h1>
             
              <div className="self-start">
                <div className="h-1 w-24 bg-orange-500" />
              </div>
            </div>
          </div>
          <h1
             className={`${textwhite} mt-28 ${headingText}   w-[100%]  font-medium`}
           >
    
       <span className='testi-linear'>  Graphic Designing </span>   Services
           </h1>

           <p
                  className={`w-[100%] sm:w-[60%] z-10  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                >
             Hire us and get the most attractive and appealing designs at the hands of our artistic, aesthetic and creative graphic designers who focus on creating meaningful digital art forms to convey your message in a more effective way.
                </p>
        
                <div className="flex flex-wrap gap-3 sm:gap-0 mt-12">
                               <button  aria-label="Get Consultation">
                                   <PrimaryButton btnText="Get Consultation" image={ForwardArrow} imageAlt="Get Consultation" />
                               </button>
                               <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                   <SecondaryButton btnText="Talk to us" image={CallIcon} imageAlt="Talk to us" />
                               </a>
                           </div>

                           <h1 className={`${headingText} mt-28 text-white text-start md:text-center`}>Modern Art as our    <span className={`services_heading_success rounded-full px-4 py-1 text-[27px] sm:text-[32px] text-white`}>graphic designing</span>  chemistry
</h1>    
<div className="flex justify-center">

<p
                  className={`w-[100%] sm:w-[60%] z-10 text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                  >
           We are a full service graphic designing services with our clients around the globe. We help businesses by solving the visual branding problems with our modern art at the hands of our expert and artistic graphic designers. We believe in,
                </p>
                    </div>

<div className="flex justify-between mt-28 gap-20">
    <div className='w-[50%]'>

    <StaticImage src='../../assets/images/graphicDesignArt.webp' className='h-full w-full'/>
    </div>
    <div className="graphic_points w-[50%] ">
        <div className='w-full'>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full border-b-2 border-primary-orange pb-5 border-dashed">
<FaHandPointRight />
                      <h5 className={`${paragraphTextColor} text-[22px]`}>Listening to your needs</h5>
</div>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full  border-b-2 border-primary-orange pb-5 border-dashed">
<FaHandPointRight />
                      <h5 className={`${paragraphTextColor} text-[20px]`}> Focusing on modern art forms
                      </h5>
</div>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full  border-b-2 border-primary-orange pb-5 border-dashed">
<FaHandPointRight />
                      <h5 className={`${paragraphTextColor} text-[20px]`}> Ensuring quality
                      </h5>
</div>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full  border-b-2 border-primary-orange pb-5 border-dashed">
<FaHandPointRight />
                      <h5 className={`${paragraphTextColor} text-[20px]`}>  Match market standards

                      </h5>
</div>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full  border-b-2 border-primary-orange pb-5 border-dashed">
<FaHandPointRight />
                      <h5 className={`${paragraphTextColor} text-[20px]`}>  Eloquence

                      </h5>
</div>
    <div className="flex items-center gap-4 text-primary-orange mt-3 w-full  border-b-2 border-primary-orange pb-5 border-dashed">
<FaHandPointRight />
                      <h5 className={`${paragraphTextColor} text-[20px]`}> Time delivery


                      </h5>
</div>
</div>

    </div>
</div>
<GDServices/>
<GDProcess/>
          </div>
<CallToAction/>
          </div>
          </div>
     </>
    );
};

export default GraphicsDesign;
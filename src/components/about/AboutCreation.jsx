import React from 'react';
import { container, headingText,  textwhite } from '../../styles/styles';
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import PrimaryButton from '../../ui/PrimaryButton';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const AboutCreation = () => {
  return (
    <div className=' relative'>

      <div className="hidden sm:flex absolute gap-5 justify-end left-[50%]">
        <div className="w-[50px] sm:w-[300px] h-[50px] sm:h-[300px] bg-[#2c242e] mt-24 rounded-full animate-move"></div>
        <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#a1a49c] rounded-full absolute -left-[300px] bottom-0 animate-move-two"></div>
      </div>

      <div className={`${container} w-full`}>
        <div className="relative">
          <div className="flex absolute gap-5 justify-end animate-move h-full w-full">
            <div className="w-[40px] sm:w-[100px] h-[40px] sm:h-[100px] bg-[#c96547] mt-24 rounded-full"></div>
            <div className="w-[40px] sm:w-[150px] h-[40px] sm:h-[150px] bg-[#c72aa0] rounded-full"></div>
            <div className="w-[40px] sm:w-[250px] h-[40px] sm:h-[250px] bg-[#2ac7c7]  rounded-full absolute left-0 "></div>
            <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-[#c7af2a] rounded-full absolute left-0"></div>
          </div>

          {/* Content Section */}
          <div className="my_glassMorhism background-glass min-h-[320px] w-[350px] sm:w-full sm:min-h-[500px] py-4 px-4 sm:py-6 rounded-[16px]">
            <div className={`flex items-center justify-between`}>
              
              {/* Text Section */}
              <div className="">
                <h1 className={`${textwhite} ${headingText} mx-auto w-[100%] text-start`}>
                  We Create <span className="text-primary-orange font-semibold">Mobile Applications</span> <br/> With Best User Experiences
                </h1>

                <p className={`w-[100%] sm:w-[60%] mt-8 text-white leading-7 text-[16px]`}>
                  We develop customized web designs to meet the demands and needs of all types of customers, from small custom websites to highly advanced online stores, ensuring that we are a 360-degree full-scale custom software development company.
                </p>

                <div className="mt-16">
                  <Link to='/services'>
                    <PrimaryButton btnText="Explore Services" image={ForwardArrow} imageAlt="Get Consultation" />
                  </Link>
                </div>
              </div>

              
              <div className="hidden sm:block w-[80%]">
                <StaticImage
                  className="h-[100%] w-[100%] cursor-pointer hover:transform hover:scale-110 transition-transform duration-300"
                  src="../../assets/images/appDevelopment.png"
                  alt="Innovative ball"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutCreation;

import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import { StaticImage } from 'gatsby-plugin-image'
import SecondaryButton from '../../ui/SecondaryButton'
import PrimaryButton from '../../ui/PrimaryButton'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import CallIcon from "../../assets/icons/CallIconOrange.png";
import Logo from '../Logo'
import Lottie from 'react-lottie'
import aboutAnime from '../../utils/aboutus-anime.json'

const AboutLandingSection = () => {
  const defaultOptionsSuccess = {
    loop: true,
    autoplay: true,
    animationData: aboutAnime,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
  return (
    <div>
         <div className="homeSectionleftBlob  mt-[150px] z-50 pointer-events-none">
        <div className="homeSectionRightBlob z-10 ">
          <div className={`${container} z-10 `}>
            <div className="flex items-center justify-between z-10 relative">
              <div>
                <h1
                  className={`${textwhite} ${headingText} z-10  w-[100%] sm:w-[75%] font-medium`}
                >
                  We Build Develop IT Solutions
                </h1>
                <p
                  className={`w-[100%] sm:w-[60%] z-10  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                >
                At Innovazy you get the best and advanced technological IT solutions for particular business problems. Our team of experts is highly qualified, experienced and skilled. As a result we provide your business a boost and take it to another level of success. Our specialists have got the best talent and expertise in web application development and business software solutions.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-0 mt-8 pointer-events-auto">
                                <button  aria-label="Get Consultation">
                                    <PrimaryButton btnText="Get Consultation" image={ForwardArrow} imageAlt="Get Consultation" />
                                </button>
                                <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                    <SecondaryButton btnText="Talk to us" image={CallIcon} imageAlt="Talk to us" />
                                </a>
                            </div>
                            
              </div>
              <div className="w-full h-full flex justify-center items-center ">


              {/* <StaticImage
                className="h-[80%] w-[80%] hidden md:block z-10 cursor-pointer hover:transform hover:scale-110 transition-transform duration-300"
                src="../../assets/images/3dboy.webp"
                alt="Innovative ball"
              /> */}

<Lottie options={defaultOptionsSuccess}
                                height={"100%"}
                                width={500}
                                isStopped={false}
                                isPaused={false} />
                                
              </div>
            </div>
            {/* <MyMatter/> */}
          
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-48 w-full absolute inset-0 -top-56">
        {/* <div> */}
          {/* <h1 className={`text-3xl font-bold ${textwhite} ${headingText} `}>
            WE <span className="text-primary-orange">ARE</span>{" "}
          </h1> */}
        {/* </div> */}
        {/* <Logo /> */}
      </div>
    </div>
  )
}

export default AboutLandingSection
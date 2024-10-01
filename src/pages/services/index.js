import React, { useEffect } from "react"
import { container, headingText, textwhite } from "../../styles/styles"
import "../../ui/services.css"
import { StaticImage } from "gatsby-plugin-image"
import "../../components/hero/hero.css"
import { servicesCards } from "../../utils/servicesCard-data"
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "gatsby"
import CallToAction from "../../ui/CallToAction"
import Lottie from 'react-lottie';
import servicesAnime from '../../utils/services-anime.json'
import { RiUserLocationFill, RiUserLocationLine } from "react-icons/ri"
const ServicesHome = () => {
  const location = RiUserLocationLine()
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[location.pathname])
  const defaultOptionsSuccess = {
    loop: true,
    autoplay: true,
    animationData: servicesAnime,
};
  return (
    <div className="homeSectionleftBlob  mt-[150px] z-50 ">
      <div className="homeSectionRightBlob  ">
        <div className={`${container} mt-[130px]`}>
          {/* <h1
              className={`${textwhite} services_glowing_text text-center uppercase tracking-wider font-[Montserrat-Bold] text-[120px] w-[100%] font-medium`}
            >
              SERVICES
            </h1> */}

          <div className="flex justify-center ">
            <div className="flex flex-col items-center">
              <div className="self-end">
                <div className="h-1 w-24 services_heading_success" />
              </div>

              <h1
                className={`${textwhite} text_effect_threeD  services_glowing_text text-center uppercase tracking-wider font-[Montserrat-Bold] text-[42px] sm:text-[120px] w-[100%] font-medium`}
              >
                SERVICES
              </h1>

              <div className="self-start mt-2">
                <div className="h-1 w-24 bg-orange-500" />
              </div>
            </div>
          </div>
          <p
            className={`w-[100%]   text-center mt-5 text-white text-[14px] sm:text-[20px] leading-6 sm:leading-7`}
          >
            COVERING ALL YOUR DIGITAL NEEDS
          </p>

          <div>
            <h1
              className={`${textwhite} mt-28  text-center   font-[Montserrat-Bold] ${headingText} w-[100%] font-medium`}
            >
              Landing{" "}
              <span className="services_heading_success rounded-full px-4 py-1 text-[22px] sm:text-[38px]">
                your success,
              </span>
            </h1>
            <h1
              className={`${textwhite} mt-4  text-center   font-[Montserrat-Bold] ${headingText} w-[100%] font-medium`}
            >
              everything starts with Innovazy
            </h1>
          </div>
          <div className="service_image flex justify-center">
            {/* <StaticImage
              className="h-[20%] w-[20%] hidden md:block z-10 cursor-pointer hover:transform hover:scale-110 transition-transform duration-300"
              src="../../assets/images/service2.png"
              alt="Innovative ball"
            /> */}
           {/* {  useLottie(options)} */}
           <Lottie options={defaultOptionsSuccess}
                                height={400}
                                width={500}
                                isStopped={false}
                                isPaused={false} />

          </div>



          <div className="grid grid-cols-12 mt-28">
            {servicesCards && servicesCards.length>0 && servicesCards.map((serData,index)=>{
return (
            <div className="col-span-12 md:col-span-6">
              <div className={`inner ${serData.imageClass} bg-gray-700 h-[400px] relative`}>
                <div className={`outer-upper overflow-hidden aboslute top-0 left-0  opacity-[0.95] h-[70%] transition-all duration-1000 ease-in-out px-8 ${serData.colorScheme}`}>

                  <div className="h-full flex justify-center flex-col">
                    <h1
                      className={`text-[rgba(255,255,255,0.6)] relative   font-[Montserrat-Bold] text-[32px] sm:text-[50px] w-[100%] font-medium`}
                    >
{serData.title}
                    </h1>
                    <div className="">

                      <p
                        className={`w-[100%] sm:w-[60%] z-10 ${textwhite} mt-5  text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                      >
                        {serData.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`outer-lower services_heading flex items-center h-[30%] w-full absolute bottom-0`}>
                  <div className="ser_card_footer px-2 flex items-center justify-between w-full pr-4">

                    <h1 className={`${textwhite }  text-[42px] sm:text-[80px] uppercase tracking-wider font-[Montserrat-Bold]  w-[100%] font-medium`}
                    >
{serData.number}
                    </h1>
                    <Link to={serData.path}>
                    <div className="text-[30px] opacity-[.8] hover:opacity-[1] border-2 border-white hover:border-primary-orange p-[10px] rounded-full hover:text-primary-orange text-white transition-all duration-200">

                    <FaExternalLinkAlt />
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

)
            })}
          

          </div>



         

        </div>
      </div>
      <CallToAction/>
    </div>
  )
}

export default ServicesHome

import React from "react"
import { container, headingText, textwhite } from "../../styles/styles"
import "../../ui/services.css"
import { StaticImage } from "gatsby-plugin-image"

const index = () => {
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
                <div className="h-1 w-24 services_heading" />
              </div>

              <h1
                className={`${textwhite}  services_glowing_text text-center uppercase tracking-wider font-[Montserrat-Bold] text-[120px] w-[100%] font-medium`}
              >
                SERVICES
              </h1>

              <div className="self-start">
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
              <span className="services_heading rounded-full px-2 py-1 opacity-[.7] text-[38px]">
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
          <StaticImage
                className="h-[20%] w-[20%] hidden md:block z-10 cursor-pointer hover:transform hover:scale-110 transition-transform duration-300"
                src="../../assets/images/service2.png"
                alt="Innovative ball"
              />
          </div>

<div className="inner bg-gray-700 h-[400px] relative">
<div className="outer-upper bg-stone-500 h-[70%]"></div>
<div className="outer-lower bg-orange-800 h-[30%] w-full absolute bottom-0 ">
  
</div>
</div>

        </div>
      </div>
    </div>
  )
}

export default index

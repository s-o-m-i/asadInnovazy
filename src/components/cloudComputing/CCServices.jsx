import React from 'react'
import { headingText, paragraphTextColor } from '../../styles/styles'
import { cloudComputingServices } from '../../utils/cloud-computing-services'
import { FaCheck } from "react-icons/fa6";

const CCServices = () => {
  const itemsPerDiv = Math.ceil(cloudComputingServices.length / 3); 

  return (
    <>
      <h1 className={`${headingText} mt-12 sm:mt-28 text-white text-start md:text-center`}>Cloud Computing Services</h1>
      
      <div className="flex justify-start sm:justify-center">
        <p className={`w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] z-10 text-center mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
          Our experts put all their efforts to remain at the forefront in cloud evolution through the adoption of virtual and converged solutions. It provides a defined model that improves user experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-12 gap-10 mt-16 sm:mt-22 w-full">

        {/* Circle elements on the left */}
        <div className="hidden sm:flex absolute gap-5 justify-end left-[50%] ">
          <div className="w-[50px] sm:w-[300px] h-[50px] sm:h-[300px] bg-[#2c242e] mt-24 rounded-full animate-move"></div>
          <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#a9ff13] rounded-full absolute -left-[300px] bottom-0 animate-move-two"></div>
        </div>

        {/* First Column */}
        <div className="col-span-12 sm:col-span-6 w-full">
          <div className="relative">
            <div className="flex absolute gap-5 justify-end animate-move">
              <div className="w-[40px] sm:w-[100px] h-[40px] sm:h-[100px] bg-[#c96547] mt-24 rounded-full"></div>
              <div className="w-[40px] sm:w-[150px] h-[40px] sm:h-[150px] bg-[#c72aa0] rounded-full"></div>
            </div>

            <div className="my_glassMorhism h-[320px] w-[350px] sm:w-full sm:h-[420px]  px-4 sm:py-6 flex items-center rounded-[16px]">
              <div>
                {cloudComputingServices.slice(0, itemsPerDiv).map((item, index) => (
                  <div className="flex items-center gap-4 text-green-500 w-full" key={index}>
                    <FaCheck />
                    <div>
                      <h5 className="text-white text-[16px] sm:text-[18px]">{item.title}</h5>
                      <div className="bg-primary-orange b-line mt-2 h-[3px] w-0 opacity-[.8]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-12 sm:col-span-6 w-full">
          <div className="relative w-full">
            <div className="flex gap-5 justify-end absolute">
              <div className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] bg-[#c96547] mt-24 rounded-full animate-move"></div>
              <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#662ac7] rounded-full animate-move"></div>
            </div>

            {/* First Subsection */}
            <div className="my_glassMorhism relative h-[200px] sm:h-[200px] sm:w-full w-[350px] px-4 sm:py-6 flex items-center rounded-[16px]">
              <div>
                {cloudComputingServices.slice(itemsPerDiv, itemsPerDiv * 2).map((item, index) => (
                  <div className="flex items-center gap-4 text-green-500 w-full" key={index}>
                    <FaCheck />
                    <div>
                      <h5 className="text-white text-[16px] sm:text-[18px]">{item.title}</h5>
                      <div className="bg-primary-orange b-line mt-2 h-[3px] w-0 opacity-[.8]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Subsection */}
            <div className="my_glassMorhism relative h-[200px] sm:h-[200px] sm:w-full mt-5 w-[350px] px-4 sm:py-6 flex items-center rounded-[16px]">
              <div>
                {cloudComputingServices.slice(itemsPerDiv * 2).map((item, index) => (
                  <div className="flex items-center gap-4 text-green-500 w-full" key={index}>
                    <FaCheck />
                    <div>
                      <h5 className="text-white text-[16px] sm:text-[18px]">{item.title}</h5>
                      <div className="bg-primary-orange b-line mt-2 h-[3px] w-0 opacity-[.8]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CCServices

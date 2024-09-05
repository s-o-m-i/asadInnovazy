import React, { useState } from "react"
import { container, paragraphTextColor, textwhite } from "../../styles/styles"
import { FaPlus } from "react-icons/fa"
import { FaMinus } from "react-icons/fa"
import { faqs } from "../../utils/faqs-data"

const Faqs = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const handleToggle = index => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null)
    } else {
      setOpenFaqIndex(index)
    }
  }
  return (
    <>
      <div className="homeSectionleftBlob  mt-[150px] z-50 ">
        <div className="homeSectionRightBlob  ">
          <div className={`${container}  `}>
            <div className="flex justify-center my-28">
              <div className="flex flex-col w-fit items-center">
                <div className="self-end">
                  <div className="h-1 w-24 bg-orange-500" />
                </div>

                <h1
                  className={`${textwhite} text-center uppercase tracking-wider font-[Aeonik-Bold] text-[60px] w-[100%] font-medium`}
                >
                  FAQ<span className="text-primary-orange">s</span>
                </h1>

                <div className="self-start">
                  <div className="h-1 w-24 bg-orange-500" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
              {faqs.map((faq, index) => {
                return (
                  <div className="col-span-12 sm:col-span-6">
                    <div className={` testi_faq_ques flex items-center justify-between py-4 px-4 bg-gradient-to-tl border-l-2  border-primary-orange to-[#0d0d0d] via-[#080808] from-black `}>
                      <h1 className={` ${   openFaqIndex === index ? "text-primary-orange":`${textwhite}`} text-xl sm:text-2xl  `}>
                        {faq.question}
                      </h1>
                      <div
                        className="text-primary-orange cursor-pointer"
                        onClick={() => handleToggle(index)}
                      >
                        {openFaqIndex === index ? <FaMinus /> : <FaPlus />}
                      </div>
                      {/*  */}
                    </div>
                    <div
                      className={`border-l-2 ${
                        openFaqIndex === index
                          ? "max-h-[500px] "
                          : "max-h-0 py-0 px-0"
                      } testi_faq_ans transition-[max-height] duration-500 overflow-hidden background-glass-dark border-primary-orange mt-2 py-2 px-4`}
                    >
                      <p
                        className={`w-[100%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                      >
                       {faq.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faqs

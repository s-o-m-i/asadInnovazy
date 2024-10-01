import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'

import SecondaryButton from '../../ui/SecondaryButton'
import PrimaryButton from '../../ui/PrimaryButton'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import CallIcon from "../../assets/icons/CallIconOrange.png";
import Lottie from 'react-lottie'
import aboutAnime from '../../utils/aboutus-anime.json'
import { PopupModal } from 'react-calendly';

const AboutLandingSection = () => {

  const [showModal, setModal] = React.useState(false);
    const handleClick = () => {
        setModal(true);
    };


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
         <div className="homeSectionleftBlob  mt-[200px] z-50 pointer-events-none">
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
                                <button  onClick={handleClick} aria-label="Get Consultation">
                                    <PrimaryButton btnText="Get Consultation" image={ForwardArrow} imageAlt="Get Consultation" />
                                </button>
                                <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                    <SecondaryButton btnText="Talk to us" image={CallIcon} imageAlt="Talk to us" />
                                </a>
                            </div>
                            
              </div>
              <div className="w-full h-full sm:flex justify-center items-center relative hidden ">

              <div className="hidden sm:flex absolute gap-5 justify-end left-[50%] ">
  <div className="w-[50px] sm:w-[300px] h-[50px] sm:h-[300px] bg-[#d96d45] mt-24 rounded-full animate-move"></div>
  <div className="w-[50px] sm:w-[150px] h-[50px] sm:h-[150px] bg-[#fff] rounded-full absolute -left-[300px] bottom-0 animate-move-two"></div>
</div>

          

<Lottie options={defaultOptionsSuccess}
                                height={"100%"}
                                width={500}
                                isStopped={false}
                                isPaused={false} />
                                
              </div>
            </div>
            {
                        typeof window !== 'undefined' ?
                            <PopupModal
                                open={showModal}
                                onModalClose={() => setModal(false)}
                                url="https://calendly.com/innovazy/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=151414&text_color=ffffff&primary_color=f17840"
                                rootElement={document.getElementById("___gatsby")}
                            />
                            :
                            ''
                    }
          </div>
        </div>
      </div>
 
    </div>
  )
}

export default AboutLandingSection
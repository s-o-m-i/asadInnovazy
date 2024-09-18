import React, { useEffect } from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import Microsoft from "../../assets/images/microsoftLogo.png";
import CallIcon from "../../assets/icons/callIcon.png";
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import "./hero.css";
import { PopupModal } from "react-calendly";

const HomeSection = () => {
    const [showModal, setModal] = React.useState(false);
    const handleClick = () => {
        setModal(true);
    };

    useEffect(() => {
        document.addEventListener("mousemove", parallax);
        
        function parallax(e) {
            const objects = document.querySelectorAll(".object");
            if (objects) {
                objects.forEach((move) => {
                    const movingValue = move.getAttribute("data-value");
                    const x = (e.clientX * movingValue) / 150;
                    const y = (e.clientY * movingValue) / 150;
                    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
                });
            }
        }

        return () => {
            document.removeEventListener("mousemove", parallax);
        };
    }, []);


    return (
        <div className='homeSectionleftBlob'>
            <div className='homeSectionRightBlob'>
                <div className={`${container}`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className={`${textwhite} ${headingText} w-[100%] sm:w-[75%] font-medium`}>We offer Advanced IT Solutions to Businesses and Industries around the Globe</h1>
                            <p className={`w-[100%] sm:w-[75%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>Our team of experienced developers has won hundreds of clients throughout our years of practice. From refining your idea and pre requisites to writing code, every step is done in close collaboration with you.</p>
                            <div className="flex flex-wrap gap-3 sm:gap-0 mt-8">
                                <button onClick={handleClick} aria-label="Get Consultation">
                                    <PrimaryButton btnText="Get Consultation" image={ForwardArrow} imageAlt="Get Consultation" />
                                </button>
                                <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                    <SecondaryButton btnText="Talk to us" image={CallIcon} imageAlt="Talk to us" />
                                </a>
                            </div>
                        </div>
                        {/* <StaticImage data-value="6" className='h-[70%] w-[70%]  object hidden md:block z-10 cursor-pointer hover:transform hover:scale-110 transition-transform duration-300' src='../../assets/images/heroBall.svg' alt='Innovative ball' /> */}
                        <img
                            data-value="8"
                            className='object h-[40%] w-[40%] hidden md:block z-10 cursor-pointer transition-all ease-linear '
                            src={require('../../assets/images/heroBall.svg').default}
                            alt='Innovative ball'
                        
                        />
                    </div>

                    <div className='mt-7'>
                        <p className={`${textwhite} text-[14px] font-semibold mt-4`}>Affiliated with</p>
                        <img className='mt-2 w-[150px] h-fit' src={Microsoft} alt="Innovazy Affiliated with Microsoft"></img>
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
    );
};

export default HomeSection;
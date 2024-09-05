import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import { services } from '../../utils/services-data';
import ServiceCard from '../../ui/ServiceCard';
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import PrimaryButton from '../../ui/PrimaryButton';
import "./hero.css";
import { Link } from 'gatsby';

const ServicesSection = () => {
    return (
        <div className={`${container} mt-[120px]`}>
            <h1 className={`${textwhite} ${headingText} mx-auto w-[100%] text-start md:text-center`}>Our Services</h1>
            <p className={`w-[100%] sm:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] text-start md:text-center leading-7`}>Empowering Your Possibilities: Explore Our Diverse Range of Services</p>

            <div className='mt-10'>
                <div className="grid md:grid-cols-12 gap-4 justify-center">
                    {services.map((x) => {
                        return <>
                            <ServiceCard fontClassName={x.fontClassName} title={x.title} description={x.description} className={x.className} link={x.link} />
                        </>;
                    })}
                </div>
            </div>
            <div className='text-center mt-14'>
                <Link to='/services'>
                    <PrimaryButton btnText="Explore Services" image={ForwardArrow} imageAlt="Get Consultation" />
                </Link>
            </div>
        </div>
    );
};

export default ServicesSection;
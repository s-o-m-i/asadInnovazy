import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import Spotlight from '../../ui/SpotlightEffect';
import { aboutData } from '../../utils/about-data';

const AboutSection = () => {
    return (
        <div className={`${container} mt-[120px]`}>
            <h1 className={`${textwhite} ${headingText} w-[100%] text-start md:text-center`}>About Company</h1>
            <p className={`w-[100%] md:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-start md:text-center text-[14px] sm:text-[16px] leading-7`}>At Innovazy LLC, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
            <Spotlight data={aboutData} />
        </div>
    );
};

export default AboutSection;
import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import Spotlight from '../../ui/SpotlightEffect';
import { benefitData } from '../../utils/benefits-data';

const BenefitSection = () => {
    return (
        <div className={`${container} mt-[120px]`}>
            <h1 className={`${textwhite} ${headingText} w-[100%] text-start md:text-center`}>Our Benefits</h1>
            <p className={`w-[100%] sm:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-start md:text-center leading-7 text-[14px] sm:text-[16px]`}>At Innovazy LLC, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
            <Spotlight data={benefitData} />
        </div>
    );
};

export default BenefitSection;
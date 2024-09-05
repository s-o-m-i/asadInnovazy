import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import PrimaryButton from '../../ui/PrimaryButton';
import ProfileCard from '../../ui/ProfileCard';
import { teamHomePageData } from '../../utils/team-data';
import ForwardArrow from "../../assets/icons/forwardArrow.png";

const TeamSection = () => {
    return (
        <div className={`${container}`}>
            <h1 className={`${textwhite} ${headingText} mx-auto w-[100%] text-start md:text-center`}>Our Team</h1>
            <p className={`w-[100%] sm:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-start md:text-center leading-7 text-[14px] sm:text-[16px]`}>Get acquainted with our dedicated team</p>
            <div className='grid md:grid-cols-12 gap-4 justify-center'>
                {teamHomePageData.map((x) => {
                    return <>
                        <ProfileCard name={x.name} image={x.image} imageAlt={x.imageAlt} description={x.description} designation={x.designation} github={x.github} instagram={x.instagram} linkedIn={x.linkedIn} twitter={x.twitter} />
                    </>;
                })}
            </div>
            <div className='text-center mt-10'>
                <PrimaryButton btnText="Explore Team" image={ForwardArrow} imageAlt="Get Consultation" link="/team" />
            </div>
        </div>
    );
};

export default TeamSection;
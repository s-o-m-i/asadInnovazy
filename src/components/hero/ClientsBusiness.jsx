import React from 'react';
import { container, headingText, textwhite } from '../../styles/styles';
import ClientBusinessCard from '../../ui/ClientBusinessCard';
import { clientsBusinessArray } from '../../utils/client-business-data';
import "./hero.css";

const ClientsBusiness = () => {

    return (
        <div className='relative'>
            <div className='clientGradientBlogTop'>
                <div className='clientGradientBlogBottom'>
                    <div className={`${container} mt-[120px]`}>
                        <h1 className={`${textwhite} ${headingText} mx-auto w-[100%] md:w-[55%] text-start md:text-center`}>Here’s the overview of how we boost our clients business</h1>
                        <div className="mt-14">
                            {clientsBusinessArray.map((x,i) => {
                                return <div key={i} className='mb-8'>
                                    <ClientBusinessCard number={x.number} heading={x.heading} subHeading={x.subHeading} description={x.description} />
                                </div>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsBusiness;;;
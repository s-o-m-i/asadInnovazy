import React, { useState } from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import { Carousel } from 'primereact/carousel';
import { testimonials } from '../../utils/testimonials-data';
import Testimonial from "../../assets/icons/quote.png";

const Testimonials = () => {
    const [autoplayInterval, setAutoplayInterval] = useState(3000);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const handleMouseEnter = () => {
        setAutoplayInterval(0); // Stop autoplay when hovering
    };

    const handleMouseLeave = () => {
        setAutoplayInterval(3000); // Resume autoplay when mouse leaves
    };

    const reviewTemplate = (review) => {
        return (
            <div
            
            onMouseEnter={handleMouseEnter} // Stop autoplay on hover
            onMouseLeave={handleMouseLeave} // Resume autoplay on leave
            className='card background-glass my-7 p-8 w-[100%] sm:w-[90%] mx-auto' id={review.id} style={{ borderRadius: "50px 20px" }}>
                <div className='grid'>
                    <div className='flex items-center justify-between'>
                        <span className='h-[1px] bg-[#262626] w-[100px]'></span>
                        <img className='h-[38px] w-[38px] mr-4' src={Testimonial} alt='Testimonials' />
                        <span className='h-[1px] bg-[#262626] w-[100px]'></span>
                    </div>
                    <p className={`font-normal text-primary-lighter text-[15px] italic pt-5 w-[100%] ${paragraphTextColor}`}>{review.message}</p>
                    <span className='text-right mt-5 italic font-medium text-[15px] text-white'>- {review.name}</span>
                </div>
            </div>
        );
    };

    return (
        <div className={`${container} mt-[120px]`}>
            <div className='mb-8'>
                <h1 className={`${textwhite} ${headingText} w-[100%] text-start md:text-center`}>What our clients say?</h1>
                <p className={`w-[100%] sm:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-start md:text-center leading-7`}>Discover how Innovazy has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey.</p>
            </div>
            <Carousel
                pt={{
                    indicators: { className: "h-[30px] w-[5%] flex justify-between mx-auto mt-5" },
                    indicatorButton: { className: "rounded-full   h-[14px] w-[14px] bg-sky-600" },
                    nextButton: {
                        style: { height: "35px", width: "35px", borderRadius: "50%" },
                        className: "background-glass text-white hidden sm:flex "
                    },
                    previousButton: {
                        style: { height: "35px", width: "35px", borderRadius: "50%" },
                        className: "background-glass text-white hidden sm:flex "
                    },
                }}
                showIndicators={false}
                showNavigators={true}
                autoplayInterval={autoplayInterval} value={testimonials} numVisible={3} numScroll={1}
                responsiveOptions={responsiveOptions} itemTemplate={reviewTemplate} circular />
        </div>
    );
};

export default Testimonials;
import React from 'react';
import TestimonialsLandingPage from '../components/testimonials/TestimonialsLandingPage';
import '../ui/testimonials.css'
import CallToAction from '../ui/CallToAction';
import Faqs from '../components/testimonials/Faqs';

const Testimonials = () => {
    return (
       <>
        <TestimonialsLandingPage/>
<Faqs/>
<CallToAction/>
       </>
    );
};

export default Testimonials;
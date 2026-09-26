import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Testimonial from './Testimonial.jsx';

function TestimonialPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Testimonial"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/testimonial', title: 'Page' },
                ]}
            />
            <Testimonial />
            <Footer />
            <BackToTop />
        </>
    );
}

export default TestimonialPages;

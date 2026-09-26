import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import About from '../HomeOne/About.jsx';
import Feature from '../HomeOne/Feature.jsx';
import Project from '../HomeOne/Project.jsx';
import Team from '../HomeThree/Team.jsx';

function AboutUs() {

    return (
        <>
            <Header />
            <PageTitle
                title="About Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/page-about', title: 'Pages' },
                ]}
            />
            <About />
            <Feature />
            <Project />
            <Team />
            <Footer />
            <BackToTop />
        </>
    );
}

export default AboutUs;

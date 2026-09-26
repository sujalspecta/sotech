import React, {useEffect} from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderYellow.jsx';
import Banner from './BannerYellow.jsx';
import Features from './Features.jsx';
import Footer from '../HomeOne/FooterYellow.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import ProjectSlider from './ProjectSlider.jsx';
import Testimonial from './Testimonial.jsx';
import Video from './Video.jsx';
import Funfact from './Funfact.jsx';
import AboutTab from './AboutTab.jsx';
import ChooseUs from './ChooseUs2.jsx';
import Contact from './Contact.jsx';
import Features2 from './Features2.jsx';
import News from './News.jsx';
import CallToAction from './CallToAction2.jsx';

function HomeTwo() {
    const [drawer, drawerAction] = useToggle(false);

    useEffect(() => {
        document.body.classList.add('yellow-mode');
        return () => {
            document.body.classList.remove('yellow-mode');
        };
    });

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Features />
            <About />
            <Service />
            <ProjectSlider />
            <Testimonial />  
            <Video />  
            <Funfact />
            <AboutTab /> 
            <ChooseUs />  
            <Contact />
            <Features2 />  
            <News />
            <CallToAction />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeTwo;

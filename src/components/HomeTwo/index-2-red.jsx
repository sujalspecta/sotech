import React, {useEffect} from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderRed.jsx';
import Banner from './BannerRed.jsx';
import Features from './Features.jsx';
import Footer from '../HomeOne/FooterRed.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import ProjectSlider from './ProjectSlider.jsx';
import Testimonial from './Testimonial.jsx';
import Video from './Video.jsx';
import Funfact from './Funfact.jsx';
import AboutTab from './AboutTab.jsx';
import ChooseUs from './ChooseUs.jsx';
import Contact from './Contact.jsx';
import Features2 from './Features2.jsx';
import News from './News.jsx';
import CallToAction from './CallToAction3.jsx';

function HomeTwo() {
    const [drawer, drawerAction] = useToggle(false);

    useEffect(() => {
        document.body.classList.add('red-mode');
        return () => {
            document.body.classList.remove('red-mode');
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

import React, {useEffect} from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderRed.jsx';
import Footer from './FooterRed.jsx';
import Banner from './Banner.jsx';
import Feature from './Feature.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import CallToAction from './CallToAction.jsx';
import Project from './Project.jsx';
import Testimonial from './Testimonial.jsx';
import Funfact from './Funfact.jsx';
import Video from './Video.jsx';
import Team from './Team.jsx';
import Clients from './Clients.jsx';
import Contact from './Contact.jsx';
import News from './News.jsx';

function HomeOne() {
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
            <Feature />
            <About />
            <Services />
            <CallToAction />
            <Project />
            <Testimonial />
            <Funfact />
            <Video />
            <Team />
            <Clients />
            <Contact />
            <News />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeOne;
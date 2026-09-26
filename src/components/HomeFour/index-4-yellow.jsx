import React, {useEffect} from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderYellow.jsx';
import Footer from '../HomeOne/FooterYellow.jsx';
import Banner from './Banner.jsx';
import Client from '../HomeFour/Client.jsx';
import Service from './Service.jsx';
import About from './About.jsx';
import Project from './Project.jsx';
import ChooseUs from './ChooseUs2.jsx';
import CallToAction from './CallToAction.jsx';
import Pricing from './Pricing.jsx';
import About2 from './About2.jsx';
import Team from './Team.jsx';
import Contact from './Contact.jsx';
import News from '../HomeOne/News.jsx';

function HomeFour() {
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
            <Client />
            <Service />
            <About />
            <Project />
            <ChooseUs />
            <CallToAction />
            <Pricing />
            <About2 />
            <Team />
            <Contact /> 
            <News />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeFour;
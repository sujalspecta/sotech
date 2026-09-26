import React, {useEffect} from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderYellow.jsx';
import Footer from '../HomeOne/FooterYellow.jsx';
import Banner from './Banner.jsx';
import About from './About.jsx';
import Project from './ProjectDark.jsx';
import Feature from './Feature.jsx';
import Team from './Team.jsx';
import Client from './Client.jsx';
import CallToAction from './CallToAction.jsx';
import Feature2 from './Feature2.jsx';
import ChooseUs from './ChooseUs.jsx';
import News from './News.jsx';
import Map from './Map.jsx';
import Contact from './Contact.jsx';
import CallToAction2 from './CallToAction2.jsx';

function HomeThree() {
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
            <About />
            <Project />
            <Feature />
            <Team />
            <Client />
            <CallToAction />
            <Feature2 />
            <ChooseUs />
            <News />
            <Map /> 
            <Contact /> 
            <CallToAction2 />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeThree;
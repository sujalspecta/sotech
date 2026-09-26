import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Projects from './Projects.jsx';

function ProjectsPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Project Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/page-projects', title: 'Pages' },
                ]}
            />
            <Projects />
            <Footer />
            <BackToTop />
        </>
    );
}

export default ProjectsPages;

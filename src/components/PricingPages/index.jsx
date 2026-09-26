import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Pricing from './Pricing.jsx';

function PricingPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Pricing"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/page-pricing', title: 'Pages' },
                ]}
            />
            <Pricing />
            <Footer />
            <BackToTop />
        </>
    );
}

export default PricingPages;

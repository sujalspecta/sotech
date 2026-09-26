import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import PortfolioFilter1 from './PortfolioFilter1.jsx';

function Products() {
    
    return (
        <>
        <Header /><PageTitle
        title="Shop"
        breadcrumb={[
            { link: '/', title: 'Home' },
            { link: '/shop-products', title: 'Shop' },
        ]}
     />
        <section className="featured-products">
            <span className="bg-shape"></span>
            <div className="auto-container">
                <div className="mixitup-gallery">
                        <PortfolioFilter1 />   
                </div>
            </div>
        </section>
        <Footer />
        <BackToTop />
        </>
    );
}

export default Products;

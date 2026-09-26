import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import PricingSwitcherImg1 from '../../assets/images/resource/pricing-1.png';

function PricingSwitcher() {
    const [activeIndex, setActiveIndex] = useState(1); // Default to Monthly
    return (
        <>
            <Header />
            <PageTitle
                title="Pricing Switcher"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/page-pricing-switcher', title: 'Pages' },
                ]}
            />
            <section className="pricing-section">
                <div className="auto-container">
                    <div className="tm-pricing-smart-switcher-button">
                        <ul className="switch-buttons justify-content-center mb-60">
                            <li>
                                <Link to="#" className={activeIndex === 1 ? "btn-toggle active" : "btn-toggle"} onClick={() => setActiveIndex(1)}
                                >
                                    <span className="title">Monthly</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={activeIndex === 2 ? "btn-toggle active" : "btn-toggle"} onClick={() => setActiveIndex(2)}
                                >
                                    <span className="title">Yearly</span>
                                    <span className="price-offer">20% Off</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        {[
                            { plan: "Basic Plan", monthly: 49, yearly: 128 },
                            { plan: "Premium Plan", monthly: 99, yearly: 199 },
                            { plan: "Pro Plan", monthly: 125, yearly: 299 },
                        ].map((item, index) => (
                            <div key={index} className="pricing-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <div className="tm-pricing-table pricing-block">
                                        <div className="inner-box">
                                            <figure className="image">
                                                <img src={PricingSwitcherImg1} alt="Pricing" />
                                            </figure>
                                            
                                            {/* Pricing Box */}
                                            <div className="price-box">
                                                <h4 className="price">
                                                    <sup>$</sup>
                                                    {activeIndex === 1 ? item.monthly : item.yearly}
                                                </h4>
                                                <span className="validaty">
                                                    {activeIndex === 1 ? "/ Monthly" : "/ Yearly"}
                                                </span>
                                            </div>

                                            <h4 className="title">{item.plan}</h4>
                                            <ul className="features">
                                                <li>24/7 system monitoring</li>
                                                <li>Security management</li>
                                                <li>Patch management</li>
                                                <li>Remote support</li>
                                            </ul>
                                            
                                            <div className="btn-box">
                                                <Link to="/page-pricing" className="theme-btn btn-style-one hvr-light">
                                                    <span className="btn-title">Choose Plan</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </>
    );
}

export default PricingSwitcher;

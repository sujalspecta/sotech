import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AboutImage1 from '../../assets/images/resource/work-2.jpg';

function About({ className }) {
    const [activeIndex, setActiveIndex] = useState(2);
    const handleOnClick = (index) => { setActiveIndex(index);
            };
    return (
        <section className={`about-section-nine ${className || ''}`}>
            <div className="auto-container">
                <div className="tabs-box tabs-three">
                    <ul className="tab-buttons clearfix">
                        <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1"><span className="title">Our Mission</span></li>
                        <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2"><span className="title">Our Vision</span></li>
                        <li className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)} data-tab="#tab3"><span className="title">Our History</span></li>
                    </ul>
                    <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
                            <div className="row">
                                <div className="blocks-column col-md-6">
                                    <div className="inner-column">
                                        <div className="sec-title">
                                            <h2>Our mission is to ensure services</h2>
                                            <div className="text">There are many variations of passages of lorem free market to available, but the majority have alteration in some form, by injected humour</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image-column col-md-6">
                                    <div className="inner-column">
                                        <div className="info-box">
                                            <h3 className="title">We have over 10 years of experience</h3>
                                            <Link to="#" className="read-more">Read More</Link>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image overlay-anim"><img src={AboutImage1} alt="Image"/></figure>
                                            <i className="icon flaticon-business-060-graph"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                            <div className="row">
                                <div className="blocks-column col-md-6">
                                    <div className="inner-column">
                                        <div className="feature-block-nine">
                                            <div className="inner-box ">
                                                <i className="icon flaticon-business-011-dollar"></i>
                                                <h4 className="title"><Link to="/page-service-details">Best Business Solution</Link></h4>
                                                <div className="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
                                            </div>
                                        </div>
                                        <div className="feature-block-nine">
                                            <div className="inner-box ">
                                                <i className="icon flaticon-business-012-startup"></i>
                                                <h4 className="title"><Link to="/page-service-details">Highest Customer Value</Link></h4>
                                                <div className="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image-column col-md-6">
                                    <div className="inner-column">
                                        <div className="info-box">
                                            <h3 className="title">We have over 24 years of experience</h3>
                                            <Link to="#" className="read-more">Read More</Link>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image overlay-anim"><img src={AboutImage1} alt="Image"/></figure>
                                            <i className="icon flaticon-business-060-graph"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="tab3">
                            <div className="tab-our-history">
                                <div className="row">
                                    <div className="image-column col-md-6">
                                        <div className="inner-column">
                                            <div className="image-box">
                                                <figure className="image overlay-anim"><img src={AboutImage1} alt="Image"/></figure>
                                                <i className="icon flaticon-business-060-graph"></i>
                                            </div>
                                            <div className="info-box">
                                                <h3 className="title">We have over 24 years of experience</h3>
                                                <Link to="#" className="read-more">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blocks-column col-md-6">
                                        <div className="inner-column">
                                            <div className="feature-block-nine">
                                                <div className="inner-box ">
                                                    <i className="icon flaticon-business-011-dollar"></i>
                                                    <h4 className="title"><Link to="/page-service-details">Best Business Solution</Link></h4>
                                                    <div className="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
                                                </div>
                                            </div>
                                            <div className="feature-block-nine">
                                                <div className="inner-box ">
                                                    <i className="icon flaticon-business-012-startup"></i>
                                                    <h4 className="title"><Link to="/page-service-details">Highest Customer Value</Link></h4>
                                                    <div className="text">Lorem ipsum dolor sit  consectetur adipiscing elit ullamcorper.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
        

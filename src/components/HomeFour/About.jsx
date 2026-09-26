import React from 'react';
import AboutImage1 from '../../assets/images/resource/about-14.jpg';
import AboutImage2 from '../../assets/images/resource/thumb-3.png';

function About({ className }) {
    return (
        <section id="about" className={`about-section-seven pt-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-6 col-lg-7 order-lg-2 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">ABOUT OUR COMPANY</span>
                                <h2>We Help to your grow your business scale.</h2>
                            </div>
                            <div className="info-box-two">
                                <i className="icon flaticon-business-054-graph"></i>
                                <h4 className="title">The Most Eminent It and Technology Consultant service provider. Branches in USA and overseas.</h4>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="info-box">
                                        <i className="icon fa fa-check-circle"></i>
                                        <h6 className="title">Business Consultation</h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="info-box">
                                        <i className="icon fa fa-check-circle"></i>
                                        <h6 className="title">Marketing Strategy</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="text">We provide a diverse array of systems, each tailored to streamline your operations and enhance productivity. Whether you require assistance with data process automation or any other specialized need.</div>
                            <div className="founder-info">
                                <div className="thumb"><img src={AboutImage2} alt="Image"/></div>
                                <h5 className="name">Aleesha Brown</h5>
                                <span className="designation">CEO & CO Founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-xl-6 col-lg-5">
                        <div className="image-box wow fadeInRight">
                            <figure className="image overlay-anim">
                                <img src={AboutImage1} alt="Image"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

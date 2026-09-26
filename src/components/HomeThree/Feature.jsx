import React from 'react';
import { Link } from 'react-router-dom';
import FeatureImage1 from '../../assets/images/resource/industries.jpg';

function Features({ className }) {
    return (
        <section id="services" className={`features-section-seven  ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="title-column col-lg-6">
                        <div className="inner-column">
                            <div className="sec-title light">
                                <span className="sub-title">ABOUT OUR COMPANY</span>
                                <h2>Our goal is ensure IT <br/>Technology service.</h2>
                                <div className="text">We provide a diverse array of systems, each tailored to streamline your operations and enhance productivity. Whether you require assistance with data process automation need.</div>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6">
                        <div className="image-box wow fadeIn">
                            <figure className="image"><img src={FeatureImage1} alt="Image"/></figure>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="feature-block-seven dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-012-startup"></i>
                            </div>
                            <h6 className="title"><Link to="/page-service-details">Web Design</Link></h6>
                        </div>
                    </div>
                    <div className="feature-block-seven dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-010-startup"></i>
                            </div>
                            <h6 className="title"><Link to="/page-service-details">UI/UX Design</Link></h6>
                        </div>
                    </div>
                    <div className="feature-block-seven dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-030-settings"></i>
                            </div>
                            <h6 className="title"><Link to="/page-service-details"> Marketing Planning</Link></h6>
                        </div>
                    </div>
                    <div className="feature-block-seven dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-054-graph"></i>
                            </div>
                            <h6 className="title"><Link to="/page-service-details">Branding</Link></h6>
                        </div>
                    </div>
                    <div className="feature-block-seven dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-049-presentation"></i>
                            </div>
                            <h6 className="title"><Link to="/page-service-details">SEO</Link></h6>
                        </div>
                    </div>
                    <div className="feature-block-seven dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-002-graph"></i>
                            </div>
                            <h6 className="title"><Link to="/page-service-details">Digital Products</Link></h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;

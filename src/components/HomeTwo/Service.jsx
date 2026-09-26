import React from 'react';
import { Link } from 'react-router-dom';

function Services({ className }) {
    return (
        <section id="services" className={`services-section-six ${className || ''}`}>
            <div className="anim-icons">
                <span className="icon icon-lines-9-top bounce-x"></span>
                <span className="icon icon-dots-9-top bounce-y"></span>
            </div>
            <div className="auto-container">
                <div className="row">
                    <div className="sec-title light col-lg-3 col-md-6 wow fadeInUp">
                        <span className="sub-title">What We offer</span>
                        <h2>We Provide Full Range Services</h2>
                    </div>
                    <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-012-startup"></i>
                            </div>
                            <h4 className="title"><Link to="/page-service-details">Website <br/>Development</Link></h4>
                        </div>
                    </div>
                    <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-010-startup"></i>
                            </div>
                            <h4 className="title"><Link to="/page-service-details">UI/UX <br/>Designing</Link></h4>
                        </div>
                    </div>
                    <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-030-settings"></i>
                            </div>
                            <h4 className="title"><Link to="/page-service-details">Digital <br/>Marketing</Link></h4>
                        </div>
                    </div>
                    <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-054-graph"></i>
                            </div>
                            <h4 className="title"><Link to="/page-service-details">Data <br/>Analysis</Link></h4>
                        </div>
                    </div>
                    <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-049-presentation"></i>
                            </div>
                            <h4 className="title"><Link to="/page-service-details">WordPress <br/>Development</Link></h4>
                        </div>
                    </div>
                    <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-002-graph"></i>
                            </div>
                            <h4 className="title"><Link to="/page-service-details">Search Engine <br/>Optimization</Link></h4>
                        </div>
                    </div>
                    <div className="service-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box ">
                            <div className="icon-box">
                                <i className="icon flaticon-business-036-idea"></i>
                            </div>
                            <h5 className="title"><Link to="/page-service-details">Custom <br/>Software</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;

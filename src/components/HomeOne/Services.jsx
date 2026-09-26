import React from 'react';
import { Link } from 'react-router-dom';

function Services({ className }) {
    return (
        <section id="services" className={`services-section-seven ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title light text-center">
                    <span className="sub-title">WHAT WE OFFERING</span>
                    <h2>We offer premium services <br/>Exclusively for you.</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="service-block-seven dark col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-business-002-graph"></i>
                            </div>
                            <h4 className="title"><Link to="/page-service-details">Website Development</Link></h4>
                            <div className="text">Donec suscipit ante ipsum. Donec convallis quality torto</div>
                            <Link to="/page-service-details" className="read-more">Read more <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="service-block-seven dark col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-business-010-startup"></i>
                            </div>
                            <h4 className="title"><Link to="/page-service-details">UI/UX Designing</Link></h4>
                            <div className="text">Donec suscipit ante ipsum. Donec convallis quality torto</div>
                            <Link to="/page-service-details" className="read-more">Read more <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="service-block-seven dark col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-business-030-settings"></i>
                            </div>
                            <h4 className="title"><Link to="/page-service-details">Digital Marketing</Link></h4>
                            <div className="text">Donec suscipit ante ipsum. Donec convallis quality torto</div>
                            <Link to="/page-service-details" className="read-more">Read more <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="service-block-seven dark col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-business-054-graph"></i>
                            </div>
                            <h4 className="title"><Link to="/page-service-details">Data Analysis</Link></h4>
                            <div className="text">Donec suscipit ante ipsum. Donec convallis quality torto</div>
                            <Link to="/page-service-details" className="read-more">Read more <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;

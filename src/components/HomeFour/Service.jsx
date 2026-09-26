import React from 'react';
import { Link } from 'react-router-dom';
function Service() {
    return (
        <section id="services" className="services-section-three">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Services we’re offering</span>
                    <h2>High quality products and services <br/>that we stand behind</h2>
                </div>
                <div className="outer-box">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
                        <div className="service-block-three col wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-002-graph"></i>
                                <h4 className="title"><Link to="/page-service-details">Data <br/>Visualization</Link></h4>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
                        <div className="service-block-three col wow fadeInUp" data-wow-delay="200ms">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-010-startup"></i>
                                <h4 className="title"><Link to="/page-service-details">UI/UX <br/>Designing</Link></h4>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
                        <div className="service-block-three col wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-030-settings"></i>
                                <h4 className="title"><Link to="/page-service-details">Digital <br/>Marketing</Link></h4>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
                        <div className="service-block-three col wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-045-stationery"></i>
                                <h4 className="title"><Link to="/page-service-details">Marketing <br/>Strategy</Link></h4>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
                        <div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box">
                                <i className="icon flaticon-business-054-graph"></i>
                                <h4 className="title"><Link to="/page-service-details">Data <br/>Analysis</Link></h4>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;

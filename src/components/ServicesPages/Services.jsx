import React from 'react';
import { Link } from 'react-router-dom';
import ServiceImage1 from '../../assets/images/resource/service-1.jpg';
import ServiceImage2 from '../../assets/images/resource/service-2.jpg';
import ServiceImage3 from '../../assets/images/resource/service-3.jpg';

function Services() {
    return (
        <section className="">
            <div className="container">
                <div className="row">
                    <div className="service-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-service-details"><img src={ServiceImage1} alt="Image"/></Link></figure>
                                <div className="icon-box"><i className="icon flaticon-business-010-startup"></i></div>
                            </div>
                            <div className="content-box">
                                <h5 className="title"><Link to="/page-service-details">Product Development</Link></h5>
                                <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                <Link to="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="service-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-service-details"><img src={ServiceImage2} alt="Image"/></Link></figure>
                                <div className="icon-box"><i className="icon flaticon-business-002-graph"></i></div>
                            </div>
                            <div className="content-box">
                                <h5 className="title"><Link to="/page-service-details">UI/UX Designing</Link></h5>
                                <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                <Link to="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="service-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-service-details"><img src={ServiceImage3} alt="Image"/></Link></figure>
                                <div className="icon-box"><i className="icon flaticon-business-048-coin"></i></div>
                            </div>
                            <div className="content-box">
                                <h5 className="title"><Link to="/page-service-details">Digital Marketing</Link></h5>
                                <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                <Link to="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="service-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-service-details"><img src={ServiceImage3} alt="Image"/></Link></figure>
                                <div className="icon-box"><i className="icon flaticon-business-002-graph"></i></div>
                            </div>
                            <div className="content-box">
                                <h5 className="title"><Link to="/page-service-details">Data Analysis</Link></h5>
                                <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                <Link to="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="service-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-service-details"><img src={ServiceImage1} alt="Image"/></Link></figure>
                                <div className="icon-box"><i className="icon flaticon-business-048-coin"></i></div>
                            </div>
                            <div className="content-box">
                                <h5 className="title"><Link to="/page-service-details">Security System</Link></h5>
                                <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                <Link to="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="service-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-service-details"><img src={ServiceImage2} alt="Image"/></Link></figure>
                                <div className="icon-box"><i className="icon flaticon-business-010-startup"></i></div>
                            </div>
                            <div className="content-box">
                                <h5 className="title"><Link to="/page-service-details">Data Visualization</Link></h5>
                                <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                <Link to="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;

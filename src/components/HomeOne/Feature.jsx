import React from 'react';
import { Link } from 'react-router-dom';

function Features({ className }) {
    return (
        <section className={`features-section-two ${className || ''}`}>
            <div className="auto-container">
                <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5 justify-content-center">
                    <div className="feature-block-two col wow fadeInUp">
                        <div className="inner-box ">
                            <i className="icon flaticon-business-011-dollar"></i>
                            <h4 className="title"><Link to="/page-service-details">Global <br/>Networking</Link></h4>
                        </div>
                    </div>
                    <div className="feature-block-two col wow fadeInUp">
                        <div className="inner-box ">
                            <i className="icon flaticon-business-049-presentation"></i>
                            <h4 className="title"><Link to="/page-service-details">Business <br/>Consultation</Link></h4>
                        </div>
                    </div>
                    <div className="feature-block-two col wow fadeInUp">
                        <div className="inner-box ">
                            <i className="icon flaticon-business-061-meeting"></i>
                            <h4 className="title"><Link to="/page-service-details">Website <br/>Development</Link></h4>
                        </div>
                    </div>
                    <div className="feature-block-two col wow fadeInUp">
                        <div className="inner-box ">
                            <i className="icon flaticon-business-030-settings"></i>
                            <h4 className="title"><Link to="/page-service-details">UI/UX Design <br/>Services</Link></h4>
                        </div>
                    </div>
                    <div className="feature-block-two col wow fadeInUp">
                        <div className="inner-box ">
                            <i className="icon flaticon-business-054-graph"></i>
                            <h4 className="title"><Link to="/page-service-details">Support Management</Link></h4>
                        </div>
                    </div>
                </div>
                <div className="bottom-text">IT Technology services built specifically for your business. <Link to="/page-services" className="theme-btn btn-style-one small"><span className="btn-title">Find Your Solution</span></Link></div>
            </div>
        </section>
    );
}

export default Features;

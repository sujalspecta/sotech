import React from 'react';
import { Link } from 'react-router-dom';

function Features({ className }) {
    return (
        <section className={`features-section-nine ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row justify-content-lg-center">
                        <div className="feature-block-nine col-lg-4 col-md-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-011-dollar"></i>
                                <h4 className="title"><Link to="/page-service-details">Business Solution</Link></h4>
                                <div className="text">When an unknown printer took a galley type book.</div>
                            </div>
                        </div>
                        <div className="feature-block-nine col-lg-4 col-md-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-054-graph"></i>
                                <h4 className="title"><Link to="/page-service-details">Growth Planning</Link></h4>
                                <div className="text">When an unknown printer took a galley type book.</div>
                            </div>
                        </div>
                        <div className="feature-block-nine col-lg-4 col-md-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-061-meeting"></i>
                                <h4 className="title"><Link to="/page-service-details">Promotional Advice</Link></h4>
                                <div className="text">When an unknown printer took a galley type book.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;

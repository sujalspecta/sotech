import React from 'react';
import FeatureImage1 from '../../assets/images/resource/feature-4.jpg';

function Features({ className }) {
    return (
            <section className={`features-section-eight pull-top  ${className || ''}`}>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            <div className="title-column col-md-12 col-xl-4">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="sub-title">WHY WE ARE BEST</span>
                                        <h2>What They’re Talking <br/>About Company</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="features-column col-lg-6 col-xl-5">
                                <div className="inner-column">
                                    <ul className="list-style-two">
                                        <li><i className="fa fa-check-circle"></i> Free Consultation</li>
                                        <li><i className="fa fa-check-circle"></i> Best Quality Work</li>
                                        <li><i className="fa fa-check-circle"></i> Free Consultation</li>
                                    </ul>
                                    <ul className="list-style-two">
                                        <li><i className="fa fa-check-circle"></i> Free Consultation</li>
                                        <li><i className="fa fa-check-circle"></i> Best Quality Work</li>
                                        <li><i className="fa fa-check-circle"></i> Free Consultation</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-xl-3">
                                <figure className="image"><img src={FeatureImage1} alt="Image"/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Features;

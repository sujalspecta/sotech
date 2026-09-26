import React from 'react';
import FeaturesBgImage1 from '../../assets/images/resource/feature-bg-1.jpg';
import FeaturesBgImage2 from '../../assets/images/resource/feature-bg-2.jpg';

function Features2({ className }) {
    return (
        <section className={`features-section-four pull-down p-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        <div className="feature-block-four col-lg-6 wow fadeInLeft">
                            <div className="inner-box">
                                <div className="content" style={{ backgroundImage: `url(${FeaturesBgImage1})`}}>
                                    <span className="icon flaticon-business-030-settings"></span>
                                    <h4 className="title">End to End Development</h4>
                                    <div className="text">There are many variations of available</div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block-four col-lg-6 wow fadeInRight">
                            <div className="inner-box">
                                <div className="content" style={{ backgroundImage: `url(${FeaturesBgImage2})` }}>
                                    <span className="icon flaticon-business-035-helpline"></span>
                                    <h4 className="title">Software IT Outsourcing</h4>
                                    <div className="text">There are many variations of available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features2;

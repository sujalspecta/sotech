import React from 'react';
import AboutImage1 from '../../assets/images/resource/image-5.jpg';

function About({ className }) {
    return (
        <section className={`about-section-eight ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-7 order-lg-2">
                        <div className="inner-column">
                            <div className="sec-title light">
                                <span className="sub-title">LEARN MORE US</span>
                                <h2>Change your business goal look with us.</h2>
                                <h4>We have 35+ years of experience. We offer marketing and consulting services</h4>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt.</div>
                            </div>
                            <div className="info-box-list">
                                <div className="info-box">
                                    <i className="icon flaticon-business-036-idea"></i>
                                    <h4 className="title">Installed <br/>Facility</h4>
                                </div>
                                <div className="info-box">
                                    <i className="icon flaticon-business-054-graph"></i>
                                    <h4 className="title">Rise your <br/>Business</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-5">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image"><img src={AboutImage1} alt="Image"/></figure>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;

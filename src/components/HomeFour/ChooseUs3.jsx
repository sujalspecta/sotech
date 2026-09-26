import React, { useState } from 'react';
import ChooseUsImage1 from '../../assets/images/resource/why-us-6.jpg';
import ChooseUsImage2 from '../../assets/images/icons/checked-red.png';

function ChooseUs() {
    const [activeIndex, setActiveIndex] = useState(2);
    const handleOnClick = (index) => { setActiveIndex(index);
                };
    return (
        <section className="why-choose-us-four">
            <div className="auto-container">
                <div className="row">
                    <div className="tab-column col-xl-6">
                        <div className="sec-title">
                            <span className="sub-title">WHY CHOOSE US</span>
                            <h2>We are the best it <br/>Solution Agency</h2>
                        </div>
                        <div className="tabs-box tabs-two">
                            <ul className="tab-buttons clearfix">
                                <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1">Our Mission</li>
                                <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2">Our Vision</li>
                                <li className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)} data-tab="#tab3">Our History</li>
                            </ul>
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
                                    <div className="row">
                                        <div className="content-column">
                                            <div className="inner-column">
                                                <div className="text">Our Mission is to empower businesses and individuals with innovative IT solutions that simplify complexities, foster growth, & inspire success. We envision a digital landscape where technology seamlessly enabling organizations to thrive in an ever-evolving world.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                                    <div className="row">
                                        <div className="content-column">
                                            <div className="inner-column">
                                                <div className="text">Our Vision is to empower businesses and individuals with innovative IT solutions that simplify complexities, foster growth, & inspire success. We envision a digital landscape where technology seamlessly enabling organizations to thrive in an ever-evolving world.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="tab3">
                                    <div className="row">
                                        <div className="content-column">
                                            <div className="inner-column">
                                                <div className="text">Our History is to empower businesses and individuals with innovative IT solutions that simplify complexities, foster growth, & inspire success. We envision a digital landscape where technology seamlessly enabling organizations to thrive in an ever-evolving world.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-column col-xl-6 order-2 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="image-box wow fadeInRight">
                                <figure className="image overlay-anim"><img src={ChooseUsImage1} alt="Image"/></figure>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-7 col-xl-6">
                                    <ul className="list-style-three">
                                        <li><figure className="icon-image"><img src={ChooseUsImage2} alt="Image"/></figure> We give good support services</li>
                                        <li><figure className="icon-image"><img src={ChooseUsImage2} alt="Image"/></figure> Our mission is to provide quality</li>
                                        <li><figure className="icon-image"><img src={ChooseUsImage2} alt="Image"/></figure> We are always give good services</li>
                                        <li><figure className="icon-image"><img src={ChooseUsImage2} alt="Image"/></figure> We provide quality product design.</li>
                                    </ul>
                                </div>
                                <div className="col-md-5 col-lg-5 col-xl-6">
                                    <div className="experience">
                                        <strong>30</strong>
                                        <div className="text">Years of <br/>Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseUs;

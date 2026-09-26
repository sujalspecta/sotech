import React from 'react';
import { Link } from 'react-router-dom';
import ChooseThumbImage from '../../assets/images/resource/thumb-1.jpg';
import ChooseImage1 from '../../assets/images/resource/about-7.jpg';
import ChooseImage2 from '../../assets/images/resource/about-8.jpg';
import ChooseIconImage from '../../assets/images/resource/icon-logo-3.png';

function ChooseUs() {
    return (
        <section className="about-section-four">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">WHY CHOOSE US</span>
                                <h2>Our goal is ensure to IT Business Services.</h2>
                                <div className="text">With Sotech, we've decided of passages of lorem free market need available, but the majority have alteration in some form, by injected humour, or randomised words</div>
                            </div>
                            <blockquote className="blockquote-style-one">We possess over 35 years of expertise in Digital Agency Services solutions in town.</blockquote>
                            <div className="btn-box">
                                <div className="">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                </div>
                                <div className="founder-info">
                                    <div className="thumb"><img src={ChooseThumbImage} alt="Image"/></div>
                                    <h5 className="name">Jon Martin</h5>
                                    <span className="designation">Co Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6">
                        <div className="inner-column wow fadeInLeft">
                            <span className="float-text">Sotech</span>
                            <figure className="image-1 overlay-anim wow fadeInUp"><img src={ChooseImage1} alt="Image"/></figure>
                            <figure className="image-2 overlay-anim wow fadeInRight"><img src={ChooseImage2} alt="Image"/></figure>
                            <div className="icon-box"><img src={ChooseIconImage} alt="Image"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseUs;

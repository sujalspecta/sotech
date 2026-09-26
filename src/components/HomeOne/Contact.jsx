import React from 'react';
import ContactImage from '../../assets/images/resource/expert-group.png';

function Contact({ className }) {
    return (
        <section id="contact" className={`contact-section-three style-two ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 order-lg-2">
                        <div className="inner-column wow fadeInRight">
                            <div className="sec-title">
                                <div className="sub-title">CONTACT US</div>
                                <h2>Contact Us Let’s Talk Your Any Query.</h2>
                                <div className="text">Witch sotech dolor sit amet consectetur adipiscing elit ultricies, in a dapibus venenatis malesuada suspendisse vestibulum massa, auctor lobortis nam etiam netus vel duis. In nec erat eget neque purus elementum mauris curabitur.</div>
                            </div>
                            <div className="call-info-box-outer">
                                <div className="call-info-box-text">Or You may <span>Call Us</span> For Appointment</div>
                                <div className="call-info-box">
                                    <i className="icon fa fa-phone"></i>
                                    <span>(+01) 000 321 11</span>
                                </div>
                            </div>
                            <div className="expert-info-box">
                                <figure className="image"><img src={ContactImage} alt="Image"/></figure>
                                <div className="expert-number">+12</div>
                                <div className="expert-text">We collaborated with <span>150+</span> new start-up</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-column col-lg-6">
                        <div className="inner-column">
                            <div className="contact-form-two wow fadeInLeft">
                                <div className="title-box">
                                    <h3>Have Any Questions</h3>
                                    <span className="sub-title">Feel free to contact us through anywhere.</span>
                                </div>
                                <form method="#" action="#" id="contact-form">
                                    <div className="row gx-3">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="full_name" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" name="Email" placeholder="Email Name" />
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <input type="text" name="website" placeholder="Website" />
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <textarea name="message" placeholder="Your Comment"></textarea>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <button className="theme-btn btn-style-one bg-dark" type="submit" name="submit-form"><span className="btn-title">GET SOLUTION</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;

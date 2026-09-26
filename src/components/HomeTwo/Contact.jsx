import React from 'react';
import ContactImage from '../../assets/images/resource/contact.jpg';

function Contact({ className }) {
    return (
        <section id="Contact" className={`contact-section-two pull-up pb-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="info-column col-xl-7 col-lg-6 order-2">
                        <div className="inner-column wow fadeInRight">
                            <div className="sec-title">
                                <div className="sub-title">Get to know</div>
                                <h2>Keep your Vision to Our Projects</h2>
                            </div>
                            <figure className="image overlay-anim"><img src={ContactImage} alt="Image"/></figure>
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h4 className="title">Business Solutions</h4>
                                <div className="text">Readers can be distracted gravida nibh velit auctor aliquet. Aenean solldin, lorem simply free text quis bibendum</div>
                            </div>
                            <div className="info-box">
                                <span className="icon fa fa-check"></span>
                                <h4 className="title">Fast & Secure Support</h4>
                                <div className="text">Sotech IT. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-column col-xl-5 col-lg-6">
                        <div className="inner-column">
                            <div className="contact-form light wow fadeInLeft">
                                <div className="title-box">
                                    <span className="sub-title">Contact us</span>
                                    <h3>Write Email</h3>
                                </div>
                                <form method="post" action="get" id="contact-form">
                                    <div className="form-group">
                                        <input type="text" name="full_name" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="Email" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="Phone" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" placeholder="Write a Message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send a m essage</span></button>
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

import React, { useState } from "react";
import ModalVideo from 'react-modal-video';
import ProgressBar from '../../lib/ProgressBar.jsx';
import ChooseUsImage from '../../assets/images/resource/why-us-3.jpg';

function ChooseUs() {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="why-choose-us-two">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-6 col-lg-7 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">ABOUT OUR COMPANY</span>
                                <h2>Our goal is to ensure IT Business accessibility.</h2>
                                <div className="text">System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="icon fa fa-check-circle"></i>
                                        <h6 className="title">Happy Customers</h6>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="icon fa fa-check-circle"></i>
                                        <h6 className="title">IT World Services</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="skills">
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <h6 className="skill-title">Complete Project</h6>
                                    </div>
                                    <ProgressBar targetPercentage={70} />
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <h6 className="skill-title">Happy Clients</h6>
                                    </div>
                                    <ProgressBar targetPercentage={50} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-xl-6 col-lg-5">
                        <div className="image-box wow fadeInRight">
                            <figure className="image overlay-anim">
                                <img src={ChooseUsImage} alt="Image"/>
                                <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play"></i></a>
                            </figure>
                        </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseUs;

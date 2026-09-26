import React from 'react';
import { Link } from 'react-router-dom';
import CallToActionBgImg from '../../assets/images/background/10-red.png';
import CallToActionImg from '../../assets/images/resource/icon-logo-4-red.png';

function CallToAction() {
    return (
        <>
            <section className="call-to-action-seven" style={{ backgroundImage: `url(${CallToActionBgImg})`}}>
                <div className="auto-container">
                    <div className="row">
                        <div className="image-column col-xl-5 col-lg-4">
                            <figure className="image mt-3 pt-1"><img src={CallToActionImg} alt="Image"/></figure>
                        </div>
                        <div className="col-xl-7 col-lg-8">
                            <div className="outer-box">
                                <div className="title-box">
                                    <h3 className="title">Free Consultation On Your <br/>Very First Insurance</h3>
                                </div>
                                <div className="btn-box">
                                    <Link to="/page-about" className="theme-btn btn-style-one bg-light"><span className="btn-title">GET SOLUTION</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CallToAction;

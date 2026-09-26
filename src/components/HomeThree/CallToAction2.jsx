import React from 'react';
import { Link } from 'react-router-dom';
import CallBgImage from '../../assets/images/background/4.jpg';

function CallToAction2() {
    return (
        <section className="call-to-action-four" style={{ backgroundImage: `url(${CallBgImage})` }}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="title-box">
                        <div className="sub-title">We’re here to help to grow your business</div>
                        <h3 className="title">Get Free Consultancy or +1 (800) 123 446 559</h3>
                    </div>
                    <div className="btn-box">
                        <Link to="/page-about" className="theme-btn btn-style-one bg-light"><span className="btn-title">GET SOLUTION</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction2;

import React from 'react';
import { Link } from 'react-router-dom';
import CallActionBgImage from '../../assets/images/background/6.jpg';

function CallToAction() {
    return (
        <section className="call-to-action-six" style={{ backgroundImage: `url(${CallActionBgImage})` }}>
            <div className="auto-container">
                <div className="title-box">
                    <h1 className="title">IT Solutions & Services Right <br/>At Your Fingertips</h1>
                    <Link to="/page-services" className="theme-btn btn-style-one"><span className="btn-title">DISCOVER MORE</span></Link>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;

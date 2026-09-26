import React from 'react';
import { Link } from 'react-router-dom';
import CallToBgImage from '../../assets/images/icons/shape-tm-10.jpg';

function CallToAction() {
    return (
        <section className="call-to-action-eight" style={{ backgroundImage: `url(${CallToBgImage})` }}>
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

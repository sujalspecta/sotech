import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <>
	<section className="pricing-section-two">
		<div className="auto-container">
			<div className="row">
				<div className="pricing-block-two col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="title-box">
							<h3 className="title">Basic plan</h3>
							<div className="text">Starts at $14. Includes 2 users</div>
						</div>
						<h2 className="price"><sup>$</sup>39<sub>/ Month</sub></h2>
						<div className="sub-title">All Basic services include:</div>
						<ul className="features">
							<li>Full Access to the Library</li>
							<li>Complete Documentation</li>
							<li>24/7 Free Support</li>
							<li>Cloud Storage Backup</li>
						</ul>
						<Link to="#" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
					</div>
				</div>
				<div className="pricing-block-two col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="title-box">
							<h3 className="title">Business Plan</h3>
							<div className="text">Starts at $14. Includes 2 users</div>
						</div>
						<h2 className="price"><sup>$</sup>49<sub>/ Month</sub></h2>
						<div className="sub-title">All Basic services include:</div>
						<ul className="features">
							<li>24/7 system monitoring</li>
							<li>Security management</li>
							<li>Patch management</li>
							<li>Remote support</li>
						</ul>
						<Link to="#" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
					</div>
				</div>
				<div className="pricing-block-two col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="title-box">
							<h3 className="title">Premium Plan</h3>
							<div className="text">Starts at $14. Includes 2 users</div>
						</div>
						<h2 className="price"><sup>$</sup>99<sub>/ Month</sub></h2>
						<div className="sub-title">All Basic services include:</div>
						<ul className="features">
							<li>24/7 system monitoring</li>
							<li>Security management</li>
							<li>Patch management</li>
							<li>Remote support</li>
						</ul>
						<Link to="#" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    );
}

export default Pricing;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-red.png';
import FooterBgImage from '../../assets/images/background/8-red.png';
import FooterThumbImage1 from '../../assets/images/resource/project-thumb-1.jpg';
import FooterThumbImage2 from '../../assets/images/resource/project-thumb-2.jpg';
import FooterThumbImage3 from '../../assets/images/resource/project-thumb-3.jpg';
import FooterThumbImage4 from '../../assets/images/resource/project-thumb-4.jpg';
import FooterThumbImage5 from '../../assets/images/resource/project-thumb-5.jpg';
import FooterThumbImage6 from '../../assets/images/resource/project-thumb-6.jpg';

function FooterHomeOne({ className }) {

    return (
    <footer className={`main-footer ${className || ''}`}>
		<div className="bg-image" style={{ backgroundImage: `url(${FooterBgImage})` }}/>
		{/* <!--Widgets Section--> */}
		<div className="widgets-section">
			<div className="auto-container">
				<div className="row">
					{/* <!--Footer Column--> */}
					<div className="footer-column col-xl-3 col-lg-12 col-md-6">
						<div className="footer-widget about-widget">
							<div className="logo"><Link to="/"><img src={logo} alt="image" /></Link></div>
							<div className="text">We're a global team of strategic digital collaborating with some of the world's largest brands.</div>
							<ul className="social-icon-two">
								<li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
								<li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
								<li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
								<li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
							</ul>
						</div>
					</div>
					{/* <!--Footer Column--> */}
					<div className="footer-column col-xl-3 col-lg-4 col-md-6">
						<div className="footer-widget">
							<h3 className="widget-title">Explore</h3>
							<ul className="user-links">
								<li><Link to="#">About Company</Link></li>
								<li><Link to="#">Meet the Team</Link></li>
								<li><Link to="#">News & Media</Link></li>
								<li><Link to="#">Our Projects</Link></li>
								<li><Link to="#">Contact</Link></li>
							</ul>
						</div>
					</div>
					{/* <!--Footer Column--> */}
					<div className="footer-column col-xl-3 col-lg-4 col-md-6">
						<div className="footer-widget contact-widget">
							<h3 className="widget-title">Contact</h3>
							<div className="widget-content">
								<div className="text">66 Road Broklyn Street, 600 New York, USA</div>
								<ul className="contact-info">
									<li><i className="fa fa-envelope"></i> <a href="mailto:needhelp@yourdomain.com">needhelp@company.com</a><br/></li>
									<li><i className="fa fa-phone-square"></i> <a href="tel:+926668880000">+92 666 888 0000</a><br/></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!--Footer Column--> */}
					<div className="footer-column col-xl-3 col-lg-4 col-md-6">
						<div className="footer-widget gallery-widget">
							<h3 className="widget-title">Gallery</h3>
							<div className="widget-content">
								<div className="outer clearfix">
									<figure className="image">
										<Link to="#"><img src={FooterThumbImage1} alt="Image"/></Link>
									</figure>
									<figure className="image">
										<Link to="#"><img src={FooterThumbImage2} alt="Image"/></Link>
									</figure>
									<figure className="image">
										<Link to="#"><img src={FooterThumbImage3} alt="Image"/></Link>
									</figure>
									<figure className="image">
										<Link to="#"><img src={FooterThumbImage4} alt="Image"/></Link>
									</figure>
									<figure className="image">
										<Link to="#"><img src={FooterThumbImage5} alt="Image"/></Link>
									</figure>
									<figure className="image">
										<Link to="#"><img src={FooterThumbImage6} alt="Image"/></Link>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* <!--Footer Bottom--> */}
		<div className="footer-bottom">
			<div className="auto-container">
				<div className="inner-container">
					<div className="copyright-text">&copy; Copyright reserved by <Link to="/">kodesolution.com</Link>
					</div>
				</div>
			</div>
		</div>
	</footer>
    );
}

export default FooterHomeOne;

import React from 'react';
import { Link } from 'react-router-dom';
import TeamImage1 from '../../assets/images/resource/team-4.jpg';
import TeamImage2 from '../../assets/images/resource/team-5.jpg';
import TeamImage3 from '../../assets/images/resource/team-6.jpg';
import TeamImage4 from '../../assets/images/resource/team-7.jpg';

function TeamSection() {
    return (
		<section className="team-section-two">
			<div className="auto-container">
				<div className="sec-title text-center">
					<span className="sub-title">OUR TEAM MATE</span>
					<h2>Expert Ready to Served</h2>
				</div>
				<div className="row">
					<div className="team-block-two col-lg-3 col-md-6 wow fadeInUp">
						<div className="inner-box">
							<div className="info-box">
								<h4 className="name"><Link to="/page-team-details">Leslie Alexander</Link></h4>
								<span className="designation">Dog Trainer</span>
								<span className="share-icon fa fa-share-alt"></span>
								<div className="social-links">
									<Link to="#"><i className="fab fa-twitter"></i></Link>
									<Link to="#"><i className="fab fa-facebook-f"></i></Link>
									<Link to="#"><i className="fab fa-pinterest-p"></i></Link>
									<Link to="#"><i className="fab fa-instagram"></i></Link>
								</div>
							</div>
							<div className="image-box">
								<figure className="image"><Link to="/page-team-details"><img src={TeamImage1} alt="Image"/></Link></figure>
							</div>
						</div>
					</div>
					<div className="team-block-two col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="400ms">
						<div className="inner-box">
							<div className="info-box">
								<h4 className="name"><Link to="/page-team-details">Esther Howard</Link></h4>
								<span className="designation">PM Assistant</span>
								<span className="share-icon fa fa-share-alt"></span>
								<div className="social-links">
									<Link to="#"><i className="fab fa-twitter"></i></Link>
									<Link to="#"><i className="fab fa-facebook-f"></i></Link>
									<Link to="#"><i className="fab fa-pinterest-p"></i></Link>
									<Link to="#"><i className="fab fa-instagram"></i></Link>
								</div>
							</div>
							<div className="image-box">
								<figure className="image"><Link to="/page-team-details"><img src={TeamImage2} alt="Image"/></Link></figure>
							</div>
						</div>
					</div>
					<div className="team-block-two col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<div className="info-box">
								<h4 className="name"><Link to="/page-team-details">Ronald Richards</Link></h4>
								<span className="designation">President of Sales</span>
								<span className="share-icon fa fa-share-alt"></span>
								<div className="social-links">
									<Link to="#"><i className="fab fa-twitter"></i></Link>
									<Link to="#"><i className="fab fa-facebook-f"></i></Link>
									<Link to="#"><i className="fab fa-pinterest-p"></i></Link>
									<Link to="#"><i className="fab fa-instagram"></i></Link>
								</div>
							</div>
							<div className="image-box">
								<figure className="image"><Link to="/page-team-details"><img src={TeamImage3} alt="Image"/></Link></figure>
							</div>
						</div>
					</div>
					<div className="team-block-two col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="1200ms">
						<div className="inner-box">
							<div className="info-box">
								<h4 className="name"><Link to="/page-team-details">Darrell Steward</Link></h4>
								<span className="designation">Medical Assistant</span>
								<span className="share-icon fa fa-share-alt"></span>
								<div className="social-links">
									<Link to="#"><i className="fab fa-twitter"></i></Link>
									<Link to="#"><i className="fab fa-facebook-f"></i></Link>
									<Link to="#"><i className="fab fa-pinterest-p"></i></Link>
									<Link to="#"><i className="fab fa-instagram"></i></Link>
								</div>
							</div>
							<div className="image-box">
								<figure className="image"><Link to="/page-team-details"><img src={TeamImage4} alt="Image"/></Link></figure>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}

export default TeamSection;

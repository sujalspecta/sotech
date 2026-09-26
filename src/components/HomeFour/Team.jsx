import React from 'react';
import { Link } from 'react-router-dom';
import TeamImage1 from '../../assets/images/resource/team1-1.jpg';
import TeamImage2 from '../../assets/images/resource/team1-2.jpg';
import TeamImage3 from '../../assets/images/resource/team1-3.jpg';
import TeamImage4 from '../../assets/images/resource/team1-4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    },
};


function TeamSection() {
    return (
		<section className="team-section">
			<div className="auto-container">
				<div className="sec-title">
					<span className="sub-title">OUR TEAM MATE</span>
					<h2>Experts Ready to Served</h2>
				</div>
				<div className="outer-box">
					<Swiper {...swiperOptions} className="team-carousel owl-theme">
						<SwiperSlide className="team-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link to="/page-team-details"><img src={TeamImage1} alt="Image"/></Link></figure>
								</div>
								<div className="info-box">
									<h4 className="name"><Link to="/page-team-details">Kevin Hardson</Link></h4>
									<span className="designation">designer</span>
									<div className="social-links">
										<Link to="#"><i className="fab fa-facebook-f"></i></Link>
										<Link to="#"><i className="fab fa-twitter"></i></Link>
										<Link to="#"><i className="fab fa-pinterest-p"></i></Link>
										<Link to="#"><i className="fab fa-instagram"></i></Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="team-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link to="/page-team-details"><img src={TeamImage2} alt="Image"/></Link></figure>
								</div>
								<div className="info-box">
									<h4 className="name"><Link to="/page-team-details">Jessica Brown</Link></h4>
									<span className="designation">developer</span>
									<div className="social-links">
										<Link to="#"><i className="fab fa-facebook-f"></i></Link>
										<Link to="#"><i className="fab fa-twitter"></i></Link>
										<Link to="#"><i className="fab fa-pinterest-p"></i></Link>
										<Link to="#"><i className="fab fa-instagram"></i></Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="team-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link to="/page-team-details"><img src={TeamImage3} alt="Image"/></Link></figure>
								</div>
								<div className="info-box">
									<h4 className="name"><Link to="/page-team-details">michale smith</Link></h4>
									<span className="designation">co founder</span>
									<div className="social-links">
										<Link to="#"><i className="fab fa-facebook-f"></i></Link>
										<Link to="#"><i className="fab fa-twitter"></i></Link>
										<Link to="#"><i className="fab fa-pinterest-p"></i></Link>
										<Link to="#"><i className="fab fa-instagram"></i></Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="team-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link to="/page-team-details"><img src={TeamImage4} alt="Image"/></Link></figure>
								</div>
								<div className="info-box">
									<h4 className="name"><Link to="/page-team-details">michale smith</Link></h4>
									<span className="designation">co founder</span>
									<div className="social-links">
										<Link to="#"><i className="fab fa-facebook-f"></i></Link>
										<Link to="#"><i className="fab fa-twitter"></i></Link>
										<Link to="#"><i className="fab fa-pinterest-p"></i></Link>
										<Link to="#"><i className="fab fa-instagram"></i></Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="team-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link to="/page-team-details"><img src={TeamImage3} alt="Image"/></Link></figure>
								</div>
								<div className="info-box">
									<h4 className="name"><Link to="/page-team-details">michale smith</Link></h4>
									<span className="designation">co founder</span>
									<div className="social-links">
										<Link to="#"><i className="fab fa-facebook-f"></i></Link>
										<Link to="#"><i className="fab fa-twitter"></i></Link>
										<Link to="#"><i className="fab fa-pinterest-p"></i></Link>
										<Link to="#"><i className="fab fa-instagram"></i></Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
    );
}

export default TeamSection;

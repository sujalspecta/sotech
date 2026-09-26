import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectBGImage from '../../assets/images/icons/shape-tm-2.jpg';
import ProjectImage1 from '../../assets/images/resource/project-1.jpg';
import ProjectImage2 from '../../assets/images/resource/project-2.jpg';
import ProjectImage3 from '../../assets/images/resource/project-3.jpg';
import ProjectImage4 from '../../assets/images/resource/project-4.jpg';

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
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    },
};

function Project({ className }) {
    return (
        <section id="projects" className={`project-section pb-0 ${className || ''}`} style={{ backgroundImage: `url(${ProjectBGImage})` }}>
            <div className="auto-container">
                <div className="sec-title">
                    <div className="row">
                        <div className="col-lg-7">
                            <span className="sub-title">Recently Completed work</span>
                            <h2>Improve & Enhance the <br/>Business Projects</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="text">Modern consumers heavily rely on digital platforms to research products before making purchasing decisions. Studies show that 51% of consumers use Google to research brands.</div>
                        </div>
                    </div>
                </div>
                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="project-carousel owl-theme">
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to={ProjectImage1} className="lightbox-image"><img src={ProjectImage1} alt="Image"/></Link></figure>
                                    <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                                <div className="content-box">
                                    <h3 className="title"><Link to="/page-project-details">Digital Marketing</Link></h3>
                                    <span className="cat">Technology / Marketing</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to={ProjectImage2} className="lightbox-image"><img src={ProjectImage2} alt="Image"/></Link></figure>
                                    <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                                <div className="content-box">
                                    <h3 className="title"><Link to="/page-project-details">Analytic Solution</Link></h3>
                                    <span className="cat">Agency / Branding</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to={ProjectImage3} className="lightbox-image"><img src={ProjectImage3} alt="Image"/></Link></figure>
                                    <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                                <div className="content-box">
                                    <h3 className="title"><Link to="/page-project-details">Tech Solution</Link></h3>
                                    <span className="cat">Cyberdeck / Promotion</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to={ProjectImage4} className="lightbox-image"><img src={ProjectImage4} alt="Image"/></Link></figure>
                                    <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                                <div className="content-box">
                                    <h3 className="title"><Link to="/page-project-details">Marketing Cleaning</Link></h3>
                                    <span className="cat">Development / HTML</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to={ProjectImage2} className="lightbox-image"><img src={ProjectImage2} alt="Image"/></Link></figure>
                                    <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                                <div className="content-box">
                                    <h3 className="title"><Link to="/page-project-details">Analytic Solution</Link></h3>
                                    <span className="cat">Agency / Branding</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Project;

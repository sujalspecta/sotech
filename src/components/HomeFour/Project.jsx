import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectImage1 from '../../assets/images/resource/project-8.jpg';
import ProjectImage2 from '../../assets/images/resource/project-9.jpg';
import ProjectImage3 from '../../assets/images/resource/project-10.jpg';
import ProjectImage4 from '../../assets/images/resource/project-11.jpg';
import ProjectImage5 from '../../assets/images/resource/project-12.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
            slidesPerView: 3,
        },
    },
};

function Project({ className }) {
    return (
        <section id="projects" className={`project-section-five ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title light">
                    <div className="row">
                        <div className="col-lg-7">
                            <span className="sub-title">recently Completed work</span>
                            <h2>Improve & Enhance the <br/>Tech Projects</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="text">We provide a diverse array of systems, each tailored to stream line your operations and enhance productivity. Whether you require assistance with data process automation.</div>
                        </div>
                    </div>
                </div>
                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="project-carousel-five owl-theme">
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to={ProjectImage1} className="lightbox-image"><img
                                                src={ProjectImage1} alt="Image"/></Link></figure>
                                    <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                                <div className="content-box">
                                    <h3 className="title"><Link to="/page-project-details">Tech Solutions</Link></h3>
                                    <span className="cat">Technology /  Marketing</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to={ProjectImage2} className="lightbox-image"><img
                                                src={ProjectImage2} alt="Image"/></Link></figure>
                                    <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                                <div className="content-box">
                                    <h3 className="title"><Link to="/page-project-details">Smart Visions</Link></h3>
                                    <span className="cat">Agency /  Branding</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to={ProjectImage3} className="lightbox-image"><img
                                                src={ProjectImage3} alt="Image"/></Link></figure>
                                    <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                                <div className="content-box">
                                    <h3 className="title"><Link to="/page-project-details">Platform Integration</Link></h3>
                                    <span className="cat">Cyberdeck /  Promotion</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to={ProjectImage4} className="lightbox-image"><img
                                                src={ProjectImage4} alt=""/></Link></figure>
                                    <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                                <div className="content-box">
                                    <h3 className="title"><Link to="/page-project-details">Web Development</Link></h3>
                                    <span className="cat">Technology /  Marketing</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to={ProjectImage5} className="lightbox-image"><img
                                                src={ProjectImage5} alt=""/></Link></figure>
                                    <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                                <div className="content-box">
                                    <h3 className="title"><Link to="/page-project-details">Web Development</Link></h3>
                                    <span className="cat">Cyberdeck /  Promotion</span>
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

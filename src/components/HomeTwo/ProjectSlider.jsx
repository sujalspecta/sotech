import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import images
import project1 from '../../assets/images/resource/project-8.jpg';
import project2 from '../../assets/images/resource/project-9.jpg';
import project3 from '../../assets/images/resource/project-10.jpg';
import project4 from '../../assets/images/resource/project-11.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation], 
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
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
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 4,
        },
    },
};


function ProjectSlider({ className }) {
    return (
        <section id="projects" className={`project-section-three ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <span className="sub-title">recently Completed work</span>
                            <h2>Improve & Enhance the <br/>Company Projects</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="text">We provide a diverse array of systems, each tailored to stream line your operations and enhance productivity. Whether you require assistance with data process automation.</div>
                        </div>
                    </div>
                </div>
                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="project-carousel-three owl-theme">
                        <SwiperSlide className="project-block-three">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href={project1} className="lightbox-image"><img src={project1} alt="Image"/></Link></figure>
                                    <div className="overlay-box">
                                        <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                        <h4 className="title"><Link to="/page-project-details">Tech Solutions</Link></h4>
                                        <span className="cat">DESIGN / IDEAS</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block-three">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href={project2} className="lightbox-image"><img src={project2} alt="Image"/></Link></figure>
                                    <div className="overlay-box">
                                        <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                        <h4 className="title"><Link to="/page-project-details">Tech Solutions</Link></h4>
                                        <span className="cat">DESIGN / IDEAS</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block-three">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href={project3} className="lightbox-image"><img src={project3} alt="Image"/></Link></figure>
                                    <div className="overlay-box">
                                        <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                        <h4 className="title"><Link to="/page-project-details">Tech Solutions</Link></h4>
                                        <span className="cat">DESIGN / IDEAS</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block-three">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href={project4} className="lightbox-image"><img src={project4} alt="Image"/></Link></figure>
                                    <div className="overlay-box">
                                        <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                        <h4 className="title"><Link to="/page-project-details">Tech Solutions</Link></h4>
                                        <span className="cat">DESIGN / IDEAS</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block-three">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href={project2} className="lightbox-image"><img src={project2} alt="Image"/></Link></figure>
                                    <div className="overlay-box">
                                        <Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                        <h4 className="title"><Link to="/page-project-details">Tech Solutions</Link></h4>
                                        <span className="cat">DESIGN / IDEAS</span>
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

export default ProjectSlider;
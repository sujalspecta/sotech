import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideBgImage1 from '../../assets/images/main-slider/s1-1.jpg';
import SlideBgImage2 from '../../assets/images/main-slider/s1-2.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 5000, 
        disableOnInteraction: false,
    },
    pagination:{
        clickable: true,
    },
    loop: true,
};

function BannerSection({ className }) {
    return (
        <section className={`banner-section-six ${className || ''}`}>
            <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                {/* <!-- Slide Item --> */}
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideBgImage1})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="inner-content">
                                <div className="shape-line animate-1"></div>
                                <div className="anim-icons">
                                    <div className="shape-1 bounce-y animate-4"></div>
                                    <div className="shape-2 bounce-x animate-5"></div>
                                    <div className="shape-3 bounce-y animate-4"></div>
                                </div>
                                <span className="sub-title animate-1"><span className="inner">WELCOME TO THE BEST SOTECH</span></span>
                                <h1 className="title animate-2">Innovative Tech <br/>It Solution</h1>
                                <div className="btn-box animate-3">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                {/* <!-- Slide Item --> */}
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideBgImage2})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="inner-content">
                                <div className="shape-line animate-1"></div>
                                <div className="anim-icons">
                                    <div className="shape-1 bounce-y animate-4"></div>
                                    <div className="shape-2 bounce-x animate-5"></div>
                                    <div className="shape-3 bounce-y animate-4"></div>
                                </div>
                                <span className="sub-title animate-1"><span className="inner">WELCOME TO THE BEST SOTECH</span></span>
                                <h1 className="title animate-2">Innovative Tech <br/>It Solution</h1>
                                <div className="btn-box animate-3">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                {/* <!-- Slide Item --> */}
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideBgImage1})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="inner-content">
                                <div className="shape-line animate-1"></div>
                                <div className="anim-icons">
                                    <div className="shape-1 bounce-y animate-4"></div>
                                    <div className="shape-2 bounce-x animate-5"></div>
                                    <div className="shape-3 bounce-y animate-4"></div>
                                </div>
                                <span className="sub-title animate-1"><span className="inner">WELCOME TO THE BEST SOTECH</span></span>
                                <h1 className="title animate-2">Innovative Tech <br/>It Solution</h1>
                                <div className="btn-box animate-3">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default BannerSection;

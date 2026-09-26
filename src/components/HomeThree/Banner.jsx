import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideImage1 from '../../assets/images/main-slider/s3-1.jpg';
import SlideImage2 from '../../assets/images/main-slider/s3-2.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation:{
        clickable: true,
    },
};

function BannerSection({ className }) {
    return (
        <section className={`banner-section-two ${className || ''}`}>
            <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage1})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-2">WELCOME TO OUR COMPANY</span>
                            <h1 className="title animate-3">Enhanced Investment & Business</h1>
                            <div className="btn-box animate-4">
                                <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage2})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-2">WELCOME TO OUR COMPANY</span>
                            <h1 className="title animate-3">Enhanced Investment & Business</h1>
                            <div className="btn-box animate-4">
                                <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default BannerSection;

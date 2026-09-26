import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideImage1 from '../../assets/images/main-slider/1.jpg';
import SlideImage2 from '../../assets/images/main-slider/s4-2.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation:{
        el: '.swiper-nav',
        clickable: true,
        
    },
};

function BannerSection({ className }) {
    return (
        <section className={`banner-section ${className || ''}`}>
            <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage1})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-1">Solutions for all businesses goal</span>
                            <h1 className="title animate-2">Top It Technological <br/>Solutions.</h1>
                            <h2 className="title-stroke animate-3">BOOST</h2>
                            <div className="btn-box animate-3">
                                <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage2})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-1">Solutions for all businesses goal</span>
                            <h1 className="title animate-2">Top It Technological <br/>Solutions.</h1>
                            <h2 className="title-stroke animate-3">BOOST</h2>
                            <div className="btn-box animate-3">
                                <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default BannerSection;

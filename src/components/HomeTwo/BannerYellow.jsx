import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideImage1 from '../../assets/images/main-slider/s2-1.jpg'; 
import SlideImage2 from '../../assets/images/main-slider/s2-2.jpg'; 
import SlideShapeImage from '../../assets/images/main-slider/s2-shape-1-yellow.png'; 

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 5000, 
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        clickable: true,
        el: '.swiper-nav',
    },
};

function BannerSection() {
    const [isOpen, setOpen] = useState(false);
    return (

        <section className="banner-section-five">
            <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage1})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="content-box-inner">
                                <div className="anim-icons bounce-y animate-4">
                                    <figure className="image"><img src={SlideShapeImage} alt="Image"/></figure>
                                </div>
                                <a onClick={() => setOpen(true)} className="play-btn lightbox-image animate-1"><i className="icon fa fa-play"></i></a>
                                <span className="sub-title animate-2">WELCOME TO SOTECH</span>
                                <h1 className="title animate-3">Make Your <br/>Business Rocket</h1>
                                <div className="btn-box animate-4">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
                                </div>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage2})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="content-box-inner">
                                <div className="anim-icons bounce-y animate-4">
                                    <figure className="image"><img src={SlideShapeImage} alt="Image"/></figure>
                                </div>
                                <a onClick={() => setOpen(true)} className="play-btn lightbox-image animate-1"><i className="icon fa fa-play"></i></a>
                                <span className="sub-title animate-2">WELCOME TO SOTECH</span>
                                <h1 className="title animate-3">Make Your <br/>Business Rocket</h1>
                                <div className="btn-box animate-4">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
                                </div>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage1})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="content-box-inner">
                                <div className="anim-icons bounce-y animate-4">
                                    <figure className="image"><img src={SlideShapeImage} alt="Image"/></figure>
                                </div>
                                <a onClick={() => setOpen(true)} className="play-btn lightbox-image animate-1"><i className="icon fa fa-play"></i></a>
                                <span className="sub-title animate-2">WELCOME TO SOTECH</span>
                                <h1 className="title animate-3">Make Your <br/>Business Rocket</h1>
                                <div className="btn-box animate-4">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
                                </div>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default BannerSection;

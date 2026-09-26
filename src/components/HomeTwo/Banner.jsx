import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ModalVideoc from 'react-modal-video';
// 1. Import the registration utility for Swiper Element
import { register } from 'swiper/element/bundle';

import SlideImage1 from '../../assets/images/main-slider/s2-1.jpg'; 
import SlideImage2 from '../../assets/images/main-slider/s2-2.jpg'; 
import SlideShapeImage from '../../assets/images/main-slider/s2-shape-1.png'; 
const ModalVideo = ModalVideoc.default || ModalVideoc
// 2. Register Swiper custom elements (Web Components)
register();

function BannerSection() {
    const [isOpen, setOpen] = useState(false);
    const swiperRef = useRef(null);

    // 3. Initialize Swiper properties using a configuration object inside useEffect
    useEffect(() => {
        const swiperContainer = swiperRef.current;
        
        const swiperOptions = {
            slidesPerView: 1,
            autoplay: {
                delay: 5000, 
                disableOnInteraction: false,
            },
            loop: true,
            navigation: {
                nextEl: '.swiper-nav-next', // Updated selector targets for Swiper Web Components
                prevEl: '.swiper-nav-prev',
            },
        };

        if (swiperContainer) {
            Object.assign(swiperContainer, swiperOptions);
            swiperContainer.initialize();
        }
    }, []);

    return (
        <section className="banner-section-five">
            {/* 4. Use custom Web Component tags instead of old React wrappers */}
            <swiper-container 
                ref={swiperRef} 
                init="false" 
                class="banner-carousel owl-theme"
            >
                {/* Slide 1 */}
                <swiper-slide class="slide-item">
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
                        </div>
                    </div>
                </swiper-slide>

                {/* Slide 2 */}
                <swiper-slide class="slide-item">
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
                        </div>
                    </div>
                </swiper-slide>

                {/* Slide 3 */}
                <swiper-slide class="slide-item">
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
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>

            {/* Placed ModalVideo once outside the slider loop to avoid DOM duplication issues */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
        </section>
    );
}

export default BannerSection;

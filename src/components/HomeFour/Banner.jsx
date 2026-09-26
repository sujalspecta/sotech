import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// 1. Import the register function to initialize Swiper Web Components
import { register } from 'swiper/element/bundle';

import SlideImage1 from '../../assets/images/main-slider/1.jpg';
import SlideImage2 from '../../assets/images/main-slider/s4-2.jpg';

// 2. Register the web components (Call this outside the component or in useEffect)
register();

function BannerSection({ className }) {
    const swiperRef = useRef(null);

    const img1 = typeof SlideImage1 === 'object' ? SlideImage1.default : SlideImage1;
    const img2 = typeof SlideImage2 === 'object' ? SlideImage2.default : SlideImage2;

    // 3. Inject Swiper configuration via parameters (V14 style)
    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next', // Swiper v14 has built-in next/prev
                prevEl: '.swiper-button-prev',
            },
            // Direct style injection into Shadow DOM if required by Swiper Element
            injectStyles: [
                `
                .swiper-button-next, .swiper-button-prev {
                    color: red; /* Custom styling example */
                }
                `
            ]
        };

        if (swiperContainer) {
            Object.assign(swiperContainer, params);
            swiperContainer.initialize();
        }
    }, []);

    return (
        <section className={`banner-section ${className || ''}`}>
            {/* 4. Use custom HTML tags 'swiper-container' and 'swiper-slide' */}
            <swiper-container 
                ref={swiperRef} 
                init="false" 
                class="banner-carousel owl-theme"
            >
                <swiper-slide class="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${img1})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-1">Solutions for all businesses goal</span>
                            <h1 className="title animate-2">Top It Technological <br/>Solutions.</h1>
                            <h2 className="title-stroke animate-3">BOOST</h2>
                            <div className="btn-box animate-3">
                                <Link to="/page-about" className="theme-btn btn-style-one">
                                    <span className="btn-title">Explore More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                
                <swiper-slide class="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${img2})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-1">Solutions for all businesses goal</span>
                            <h1 className="title animate-2">Top It Technological <br/>Solutions.</h1>
                            <h2 className="title-stroke animate-3">BOOST</h2>
                            <div className="btn-box animate-3">
                                <Link to="/page-about" className="theme-btn btn-style-one">
                                    <span className="btn-title">Explore More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </section>
    );
}

export default BannerSection;

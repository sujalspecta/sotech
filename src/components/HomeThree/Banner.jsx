import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// 1. Import the registration utility for Swiper Element
import { register } from 'swiper/element/bundle';

import SlideImage1 from '../../assets/images/main-slider/s3-1.jpg';
import SlideImage2 from '../../assets/images/main-slider/s3-2.jpg';

// 2. Register Swiper custom elements (Web Components)
register();

function BannerSection({ className }) {
    const swiperRef = useRef(null);

    // Bundler check: Extracts raw URL string if your bundler imports images as objects
    const img1 = typeof SlideImage1 === 'object' ? SlideImage1.default || SlideImage1 : SlideImage1;
    const img2 = typeof SlideImage2 === 'object' ? SlideImage2.default || SlideImage2 : SlideImage2;

    // 3. Initialize Swiper properties using a configuration object inside useEffect
    useEffect(() => {
        const swiperContainer = swiperRef.current;
        
        const swiperOptions = {
            slidesPerView: 1,
            autoplay: {
                delay: 8500,
                disableOnInteraction: false,
            },
            loop: true,
            navigation: true, // Swiper custom element automatically creates default nav arrows when true
        };

        if (swiperContainer) {
            Object.assign(swiperContainer, swiperOptions);
            swiperContainer.initialize();
        }
    }, []);

    return (
        <section className={`banner-section-two ${className || ''}`}>
            {/* 4. Use custom Web Component tags instead of old React wrappers */}
            <swiper-container 
                ref={swiperRef} 
                init="false" 
                class="banner-carousel owl-theme"
            >
                <swiper-slide class="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${img1})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-2">WELCOME TO OUR COMPANY</span>
                            <h1 className="title animate-3">Enhanced Investment & Business</h1>
                            <div className="btn-box animate-4">
                                <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                
                <swiper-slide class="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${img2})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <span className="sub-title animate-2">WELCOME TO OUR COMPANY</span>
                            <h1 className="title animate-3">Enhanced Investment & Business</h1>
                            <div className="btn-box animate-4">
                                <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </section>
    );
}

export default BannerSection;

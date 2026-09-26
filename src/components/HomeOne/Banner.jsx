import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// 1. Import the registration utility for Swiper Element
import { register } from 'swiper/element/bundle';

import SlideBgImage1 from '../../assets/images/main-slider/s1-1.jpg';
import SlideBgImage2 from '../../assets/images/main-slider/s1-2.jpg';

// 2. Register Swiper custom elements (Web Components)
register();

function BannerSection({ className }) {
    const swiperRef = useRef(null);

    // Extract the raw URL string if your bundler imports images as objects
    const img1 = typeof SlideBgImage1 === 'object' ? SlideBgImage1.default || SlideBgImage1 : SlideBgImage1;
    const img2 = typeof SlideBgImage2 === 'object' ? SlideBgImage2.default || SlideBgImage2 : SlideBgImage2;

    // 3. Initialize Swiper properties using a configuration object inside useEffect
    useEffect(() => {
        const swiperContainer = swiperRef.current;
        
        const swiperOptions = {
            slidesPerView: 1,
            autoplay: {
                delay: 5000, 
                disableOnInteraction: false,
            },
            pagination: {
                clickable: true,
            },
            loop: true,
        };

        if (swiperContainer) {
            Object.assign(swiperContainer, swiperOptions);
            swiperContainer.initialize();
        }
    }, []);

    return (
        <section className={`banner-section-six ${className || ''}`}>
            {/* 4. Use custom Web Component tags instead of old React wrappers */}
            <swiper-container 
                ref={swiperRef} 
                init="false" 
                class="banner-carousel owl-theme"
            >
                {/* <!-- Slide Item 1 --> */}
                <swiper-slide class="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${img1})` }}/>
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
                </swiper-slide>
                
                {/* <!-- Slide Item 2 --> */}
                <swiper-slide class="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${img2})` }}/>
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
                </swiper-slide>
                
                {/* <!-- Slide Item 3 --> */}
                <swiper-slide class="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${img1})` }}/>
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
                </swiper-slide>
            </swiper-container>
        </section>
    );
}

export default BannerSection;

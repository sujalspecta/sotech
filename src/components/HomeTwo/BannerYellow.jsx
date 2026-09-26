import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// 1. Import the registration utility for Swiper Element
import { register } from 'swiper/element/bundle';

import SlideImage1 from '../../assets/images/main-slider/s2-1.jpg'; 
import SlideImage2 from '../../assets/images/main-slider/s2-2.jpg'; 
import SlideShapeImage from '../../assets/images/main-slider/s2-shape-1-yellow.png'; 

// 2. Register Swiper custom elements (Web Components)
register();

function BannerSection() {
    const [isOpen, setOpen] = useState(false);
    const swiperRef = useRef(null);

    // Safeguard image assets
    const img1 = typeof SlideImage1 === 'object' ? SlideImage1.default || SlideImage1 : SlideImage1;
    const img2 = typeof SlideImage2 === 'object' ? SlideImage2.default || SlideImage2 : SlideImage2;
    const shapeImg = typeof SlideShapeImage === 'object' ? SlideShapeImage.default || SlideShapeImage : SlideShapeImage;

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
                nextEl: '.swiper-nav-next', // Explicitly targeting selectors inside Web Components structures
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
                {/* <!-- Slide Item 1 --> */}
                <swiper-slide class="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${img1})` }}/>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="content-box-inner">
                                <div className="anim-icons bounce-y animate-4">
                                    <figure className="image"><img src={shapeImg} alt="Shape decoration"/></figure>
                                </div>
                                <button onClick={() => setOpen(true)} className="play-btn lightbox-image animate-1" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                    <i className="icon fa fa-play"></i>
                                </button>
                                <span className="sub-title animate-2">WELCOME TO SOTECH</span>
                                <h1 className="title animate-3">Make Your <br/>Business Rocket</h1>
                                <div className="btn-box animate-4">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
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
                            <div className="content-box-inner">
                                <div className="anim-icons bounce-y animate-4">
                                    <figure className="image"><img src={shapeImg} alt="Shape decoration"/></figure>
                                </div>
                                <button onClick={() => setOpen(true)} className="play-btn lightbox-image animate-1" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                    <i className="icon fa fa-play"></i>
                                </button>
                                <span className="sub-title animate-2">WELCOME TO SOTECH</span>
                                <h1 className="title animate-3">Make Your <br/>Business Rocket</h1>
                                <div className="btn-box animate-4">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">EXPLORE MORE</span></Link>
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
                            <div className="content-box-inner">
                                <div className="anim-icons bounce-y animate-4">
                                    <figure className="image"><img src={shapeImg} alt="Shape decoration"/></figure>
                                </div>
                                <button onClick={() => setOpen(true)} className="play-btn lightbox-image animate-1" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                    <i className="icon fa fa-play"></i>
                                </button>
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

            {/* Adjusted structure for handling standard global outer navigation triggers */}
            <div className="swiper-nav">
                <div className="swiper-nav-prev"></div>
                <div className="swiper-nav-next"></div>
            </div>

            {/* Alternative Direct Video Modal Portal using Native Element Wrapper */}
            {isOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center',
                    alignItems: 'center', zIndex: 99999
                }} onClick={() => setOpen(false)}>
                    <div style={{ position: 'relative', width: '80%', maxWidth: '800px', aspectRatio: '16/9' }} onClick={e => e.stopPropagation()}>
                        <button onClick={() => setOpen(false)} style={{
                            position: 'absolute', top: '-40px', right: '0', color: '#fff',
                            background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'
                        }}>&times; Close</button>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://youtube.com"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}

export default BannerSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NewsImage1 from '../../assets/images/resource/news-1.jpg';
import NewsImage2 from '../../assets/images/resource/news-2.jpg';
import NewsImage3 from '../../assets/images/resource/news-3.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
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
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    },
};

function News({ className }) {
    return (
        <section id="news" className={`news-section-two ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="title-column col-lg-4">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">from the blog</span>
                                <h2>Our L atest News & Articles from the Blog</h2>
                                <div className="text">We take pride in our business achievements, crafting a unique story with each success. How about yours?"</div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-column col-lg-8">
                        <div className="carousel-outer">
                            <Swiper {...swiperOptions} className="news-carousel owl-theme">
                                <SwiperSlide className="news-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link to="/news-details"><img src={NewsImage1} alt="Image"/></Link></figure>
                                            <span className="date"><b>28</b> OCT</span>
                                        </div>
                                        <div className="content-box">
                                            <ul className="post-info">
                                                <li><i className="fa fa-user"></i> by Admin</li>
                                                <li><i className="fa fa-tag"></i> Technology</li>
                                            </ul>
                                            <h3 className="title"><Link to="/news-details">Does My Website Need Any Blog?</Link></h3>
                                        </div>
                                        <div className="bottom-box">
                                            <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                            <div className="comments"><i className="fa fa-comments"></i> 02</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="news-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link to="/news-details"><img src={NewsImage2} alt="Image"/></Link></figure>
                                            <span className="date"><b>28</b> OCT</span>
                                        </div>
                                        <div className="content-box">
                                            <ul className="post-info">
                                                <li><i className="fa fa-user"></i> by Admin</li>
                                                <li><i className="fa fa-tag"></i> Technology</li>
                                            </ul>
                                            <h3 className="title"><Link to="/news-details">Strengthening the Business Transition Across Asia.</Link></h3>
                                        </div>
                                        <div className="bottom-box">
                                            <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                            <div className="comments"><i className="fa fa-comments"></i> 02</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="news-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link to="/news-details"><img src={NewsImage3} alt="Image"/></Link></figure>
                                            <span className="date"><b>28</b> OCT</span>
                                        </div>
                                        <div className="content-box">
                                            <ul className="post-info">
                                                <li><i className="fa fa-user"></i> by Admin</li>
                                                <li><i className="fa fa-tag"></i> Technology</li>
                                            </ul>
                                            <h3 className="title"><Link to="/news-details">Advancing the Corporate Transition Across.</Link></h3>
                                        </div>
                                        <div className="bottom-box">
                                            <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                            <div className="comments"><i className="fa fa-comments"></i> 02</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="news-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link to="/news-details"><img src={NewsImage1} alt="Image"/></Link></figure>
                                            <span className="date"><b>28</b> OCT</span>
                                        </div>
                                        <div className="content-box">
                                            <ul className="post-info">
                                                <li><i className="fa fa-user"></i> by Admin</li>
                                                <li><i className="fa fa-tag"></i> Technology</li>
                                            </ul>
                                            <h3 className="title"><Link to="/news-details">Does My Website Need Any Blog?</Link></h3>
                                        </div>
                                        <div className="bottom-box">
                                            <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                            <div className="comments"><i className="fa fa-comments"></i> 02</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;

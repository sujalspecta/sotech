import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import TestimonialImage1 from '../../assets/images/resource/testimonial-1.png';
import TestiThumb1 from '../../assets/images/resource/testi-thumb-1.jpg';
import TestiThumb2 from '../../assets/images/resource/testi-thumb-2.jpg';
import TestiThumb3 from '../../assets/images/resource/testi-thumb-3.jpg';

function Testimonial({ className }) {
     const [thumbsSwiper, setThumbsSwiper] = useState(null); // State to store the thumbs swiper
    const swiperOptions = {
        modules: [Autoplay, Thumbs, Pagination],
        slidesPerView: 1,
        autoplay: {
            delay: 50000,
            disableOnInteraction: false,
        },
        pagination: {
            clickable: true,
        },
        loop: true,
        thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined, 
    };
    return (

        <section className={`testimonial-section pt-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">OUR FEEDBACKS</span>
                    <h2>What They’re Talking<br/> About Company</h2>
                </div>
                <div className="testimonials">
                    {/* <!-- Swiper --> */}
                    <Swiper {...swiperOptions} className="swiper-container testimonial-content">
                            <div className="swiper-wrapper">
                                {/* <!-- Testimonial Block Two --> */}
                                <SwiperSlide className="testimonial-block swiper-slide">
                                    <div className="row">
                                        <div className="content-column col-lg-6">
                                            <div className="icon-box">
                                                <span className="icon icon-quote"></span>
                                                <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                            </div>
                                            <div className="text">We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment</div>
                                            <div className="info-box">
                                                <h4 className="name">Mike Hardson</h4>
                                                <span className="designation">Senior Designer</span>
                                            </div>
                                        </div>
                                        <div className="image-column col-lg-6">
                                            <figure className="image"><img src={TestimonialImage1} alt="Image"/></figure>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* <!-- Testimonial Block Two --> */}
                                <SwiperSlide className="testimonial-block swiper-slide">
                                    <div className="row">
                                        <div className="content-column col-lg-6">
                                            <div className="icon-box">
                                                <span className="icon icon-quote"></span>
                                                <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                            </div>
                                            <div className="text">We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment</div>
                                            <div className="info-box">
                                                <h4 className="name">Jessica Brown</h4>
                                                <span className="designation">Senior Designer</span>
                                            </div>
                                        </div>
                                        <div className="image-column col-lg-6">
                                            <figure className="image"><img src={TestimonialImage1} alt="Image"/></figure>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* <!-- Testimonial Block Two --> */}
                                <SwiperSlide className="testimonial-block swiper-slide">
                                    <div className="row">
                                        <div className="content-column col-lg-6">
                                            <div className="icon-box">
                                                <span className="icon icon-quote"></span>
                                                <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                            </div>
                                            <div className="text">We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment</div>
                                            <div className="info-box">
                                                <h4 className="name">Jessica Brown</h4>
                                                <span className="designation">CEO & Founder</span>
                                            </div>
                                        </div>
                                        <div className="image-column col-lg-6">
                                            <figure className="image"><img src={TestimonialImage1} alt="Image"/></figure>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* <!-- Add Pagination --> */}
                                <div className="testimonial-pagination"></div>
                            </div>
                    </Swiper>
                    {/* <!-- Testimonial Thumbs --> */}
                     <Swiper
                        onSwiper={setThumbsSwiper} // Set the swiper instance
                        direction="vertical"
                        slidesPerView={3}
                        spaceBetween={0}
                        breakpoints={{
                            0: {
                            direction: "horizontal"
                            },
                            768: {
                            direction: "vertical"
                            }
                        }}
                        className="swiper-container testimonial-thumbs">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide testimonial-thumb">
                                    <figure className="image"><img src={TestiThumb2 } alt="Image"/></figure>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide testimonial-thumb">
                                    <figure className="image"><img src={TestiThumb1} alt="Image"/></figure>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide testimonial-thumb">
                                    <figure className="image"><img src={TestiThumb3} alt="Image"/></figure>
                                </SwiperSlide>
                            </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TestimonialsImage1 from '../../assets/images/resource/testi-thumb-1.jpg';
import TestimonialsImage2 from '../../assets/images/resource/testi-thumb-2.jpg';
import TestimonialsImage3 from '../../assets/images/resource/testi-thumb-3.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
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

function Testimonial() {
    return (
        <section className="testimonial-section-five">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Client’s Testimonials</span>
                    <h2>Here are some clients <br />feedbacks</h2>
                </div>
                <div className="outer-box">
                    <Swiper {...swiperOptions} className="testimonial-carousel owl-theme">
                        <SwiperSlide className="testimonial-block-five">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-alt"></i></div>
                                    <div className="text">IT Solutions excels with comprehensive services, user-friendly website, and dedication to customer satisfaction</div>
                                </div>
                                <div className="thumb"><img src={TestimonialsImage1} alt="Image" /></div>
                                <span className="designation">Co Founder</span>
                                <h4 className="name">Jhon D. William</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="testimonial-block-five">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-alt"></i></div>
                                    <div className="text">IT Solutions excels with comprehensive services, user-friendly website, and dedication to customer satisfaction</div>
                                </div>
                                <div className="thumb"><img src={TestimonialsImage2} alt="Image" /></div>
                                <span className="designation">Co Founder</span>
                                <h4 className="name">Aleesha Brown</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="testimonial-block-five">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-alt"></i></div>
                                    <div className="text">IT Solutions excels with comprehensive services, user-friendly website, and dedication to customer satisfaction</div>
                                </div>
                                <div className="thumb"><img src={TestimonialsImage3} alt="Image" /></div>
                                <span className="designation">Co Founder</span>
                                <h4 className="name">Mike Hardon</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="testimonial-block-five">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-alt"></i></div>
                                    <div className="text">IT Solutions excels with comprehensive services, user-friendly website, and dedication to customer satisfaction</div>
                                </div>
                                <div className="thumb"><img src={TestimonialsImage2} alt="Image" /></div>
                                <span className="designation">Co Founder</span>
                                <h4 className="name">Aleesha Brown</h4>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;

import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ClientImage1 from '../../assets/images/resource/client-1.png';
import ClientImage2 from '../../assets/images/resource/client-2.png';
import ClientImage3 from '../../assets/images/resource/client-3.png';
import ClientImage4 from '../../assets/images/resource/client-4.png';
import ClientImage5 from '../../assets/images/resource/client-5.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 5,
        },
    },
};

function Client() {
    return (
        <section className="clients-section border-bottom">
            <div className="auto-container">
                <div className="sponsors-outer">
                    <Swiper {...swiperOptions} className="clients-carousel owl-theme">
                        <SwiperSlide className="slide-item"> <Link to="#"><img src={ClientImage1} alt="Image" /></Link> </SwiperSlide>
                        <SwiperSlide className="slide-item"> <Link to="#"><img src={ClientImage2} alt="Image" /></Link> </SwiperSlide>
                        <SwiperSlide className="slide-item"> <Link to="#"><img src={ClientImage3} alt="Image" /></Link> </SwiperSlide>
                        <SwiperSlide className="slide-item"> <Link to="#"><img src={ClientImage4} alt="Image" /></Link> </SwiperSlide>
                        <SwiperSlide className="slide-item"> <Link to="#"><img src={ClientImage5} alt="Image" /></Link> </SwiperSlide>
                        <SwiperSlide className="slide-item"> <Link to="#"><img src={ClientImage3} alt="Image" /></Link> </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Client;

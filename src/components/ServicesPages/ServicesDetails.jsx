import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx'
import ServiceDetailsImage1 from '../../assets/images/resource/benefits.jpg';
import ServiceDetailsImage2 from '../../assets/images/resource/overlay-shape.png';
import ServiceDetailsImage3 from '../../assets/images/resource/service-details.jpg';

function ServicesDetails() {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };
    // Manage the state to track which accordion is open
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle function for accordion items
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Accordion data
    const faqs = [
        {
            question: "How to soft launch your business?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "Is my technology allowed on tech?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "How to turn visitors into contributors",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "How can i find my solutions?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
    ];

    return (
        <>
            <Header />
            <PageTitle
                title="Services Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/page-service-details', title: 'Services' },
                ]}
            />
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="service-sidebar">
                                <div className="sidebar-widget service-sidebar-single">
                                    <div className="service-sidebar wow fadeInUp"
                                        data-wow-delay="0.1s" data-wow-duration="1200m">
                                        <div className="service-list">
                                        <ul>
                                        <li><Link to="/page-service-details" className="current"><i className="fas fa-angle-right"></i><span>Digital Marketing</span></Link></li>
                                        <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>UI/UX Designing</span></Link></li>
                                        <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Product Development</span></Link></li>
                                        <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Data Analysis</span></Link></li>
                                        <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Security System</span></Link></li>
                                        <li><Link to="/page-service-details"><i className="fas fa-angle-right"></i><span>Data Visualization</span></Link></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget banner-widget">
                                    <div className="widget-content" style={{ backgroundImage: `url(${ServiceDetailsImage1})` }}>
                                        <div className="shape" style={{ backgroundImage: `url(${ServiceDetailsImage2})` }}></div>
                                        <div className="content-box">
                                        <div className="icon-box">
                                            <i className="lnr lnr-icon-pie-chart"></i>
                                        </div>
                                        <h3>Be healthy & eat only fresh</h3>
                                        <Link to="/page-contact" className="theme-btn btn-style-two bg-light"><span className="btn-title text-black"> Contact us</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget service-sidebar-single mt-5">
                                    <div className="service-sidebar-single-btn wow fadeInUp"
                                        data-wow-delay="0.5s" data-wow-duration="1200m">
                                        <Link to="#" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf"></span> download pdf file</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="services-details__content">
                                <img src={ServiceDetailsImage3} alt="Image" />
                                <h2 className="mt-4">Service Overview</h2>
                                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                <div className="content mt-40">
                                    <div className="text">
                                        <h3>Service Center</h3>
                                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                    <div className="feature-list">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Fast home delivery</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Secure Payments</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Delivering best products</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Food Inspections</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Generator Systems</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Assessments</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" mt-25">
                                    <h3>Frequently Asked Question</h3>
                                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <ul className="accordion-box wow fadeInRight">
                                        {faqs.map((faq, index) => (
                                            <li
                                                key={index}
                                                className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}
                                            >
                                                <div
                                                    className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                                                    onClick={() => toggleAccordion(index)}
                                                >
                                                    {faq.question}
                                                    <div className="icon fa fa-plus"></div>
                                                </div>
                                                <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                                    <div className="content">
                                                        <div className="text">{faq.answer}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
}

export default ServicesDetails;

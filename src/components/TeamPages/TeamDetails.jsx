import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import ProgressBar2 from '../../lib/ProgressBar2';
import ContactForm from "../../lib/ContactForm";

// Import images
import TeamDetailsImg from '../../assets/images/resource/team-details.jpg';

// Progress bar component
const ProgressLine = ({ title, percent }) => (
    <div className="team-details__progress-single">
        <h4 className="team-details__progress-title">{title}</h4>
        <div className="bar">
            <div className="bar-inner count-bar" style={{ width: `${percent}%` }}>
                <div className="count-text">{percent}%</div>
            </div>
        </div>
    </div>
);

function TeamDetails() {
    return (
        <>
            <Header />
            <PageTitle
                title="Team Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/team-details', title: 'Team Details' },
                ]}
            />
            <section className="team-details">
                <div className="container pb-100">
                    <div className="team-details__top pb-70">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-left">
                                    <div className="team-details__top-img">
                                        <img src={TeamDetailsImg} alt="Richerd Fred" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-right">
                                    <div className="team-details__top-content">
                                        <h3 className="team-details__top-name">Richerd Fred</h3>
                                        <p className="team-details__top-title">Managing Director & CEO</p>
                                        <div className="team-details__social">
                                            <Link to="#"><i className="fab fa-twitter"></i></Link>
                                            <Link to="#"><i className="fab fa-facebook"></i></Link>
                                            <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                            <Link to="#"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                        <p className="team-details__top-text-1">I help my clients stand out and <br /> they help me grow.</p>
                                        <p className="team-details__top-text-3">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae.</p>
                                        <p className="team-details__top-text-2">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-details__bottom pt-100">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-left">
                                    <h4 className="team-details__bottom-left-title">Personal Experience</h4>
                                    <p className="team-details__bottom-left-text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-right">
                                    <div className="team-details__progress">
                                        <ProgressBar2 title="Marketing" targetPercentage={90} />
                                        <ProgressBar2 title="Farming" targetPercentage={80} />
                                        <ProgressBar2 title="Business" targetPercentage={75} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-contact-form">
                <div className="container pb-100">
                    <div className="sec-title text-center">
                        <span className="sub-title">Contact With Us Now</span>
                        <h2 className="section-title__title">Feel Free to Write Our <br /> Technology Experts</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
}

export default TeamDetails;
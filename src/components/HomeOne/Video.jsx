import React,{useState} from 'react';
import ModalVideoc from 'react-modal-video';
import VideoImage from '../../assets/images/resource/image-4.jpg';
const ModalVideo = ModalVideoc.default || ModalVideoc

function Video({ className }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className={`offer-section-five ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="image-column col-lg-6">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image"><img src={VideoImage} alt="Image"/></figure>
                                <div className="caption-box">
                                    <div className="icon-box">
                                        <a onClick={() => setOpen(true)} className="play-now lightbox-image"><i className="icon fa fa-play"></i></a>
                                    </div>
                                    <div className="title-box">
                                        <h5 className="title">Professional IT Services you Can trust</h5>
                                    </div>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                    <div className="content-column col-lg-6">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">WHY CHOOSE US</span>
                                <h2>Our mission is provide Widespread access.</h2>
                                <div className="text">Our passionate professionals craft tailored, high-quality systems to meet your unique needs and deliver effective solutions.</div>
                            </div>
                            <div className="info-box">
                                <i className="icon flaticon-business-036-idea"></i>
                                <h4 className="title">For Your Specific Industry We Have Smart Idea For Business goal.</h4>
                            </div>
                            <ul className="list-style-two">
                                <li><i className="fa fa-check-circle"></i> Mounting System for Ground Installation</li>
                                <li><i className="fa fa-check-circle"></i> Making this the first true generator on the Internet</li>
                                <li><i className="fa fa-check-circle"></i> Various versions have evolved over the years</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Video;

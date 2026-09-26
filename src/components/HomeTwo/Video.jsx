import React, {useState} from 'react';
import ModalVideoc from 'react-modal-video';
import VideoImage from '../../assets/images/resource/image-6.jpg';
import VideoIconImage from '../../assets/images/icons/icon-arrow.png';
const ModalVideo = ModalVideoc.default || ModalVideoc
function Video({ className }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className={`offer-section-two ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Welcome to tech</span>
                                <h2>Your Success with the Best IT Solutions</h2>
                            </div>
                            <div className="info-box">
                                <span className="count">01</span>
                                <div className="text">We continuously endeavour to deliver our utmost best to customers in our City.</div>
                            </div>
                            <div className="info-box">
                                <span className="count">02</span>
                                <div className="text">We continuously endeavour to deliver our utmost best to customers in our City.</div>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image"><img src={VideoImage} alt="Image"/></figure>
                                <div className="video-box wow fadeIn">
                                    <h4 className="title">Watch our video</h4>
                                    <img className="arrow-icon" src={VideoIconImage} alt="Image"/>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play"></i></a>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Video;

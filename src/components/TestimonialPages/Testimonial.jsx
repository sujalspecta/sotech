import React from 'react';
import TestimonialsImage1 from '../../assets/images/resource/testi-thumb-2.jpg';
import TestimonialsImage2 from '../../assets/images/resource/testi-thumb-3.jpg';


function Testimonial() {
    return (
        <>
    <section>
		<div className="container pb-90">
			<div className="row">
				<div className="col-lg-6">
					<div className="testimonial-block-four mb-md-30">
						<div className="inner-box">
							<div className="content-box">
								<span className="icon icon-quote"></span>
								<div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
								<div className="text">Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.</div>
							</div>
							<div className="info-box">
								<figure className="thumb"><img src={TestimonialsImage2} alt="Image"/></figure>
								<h5 className="name">Jessica Brown</h5>
								<span className="designation">Founder</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="testimonial-block-four">
						<div className="inner-box">
							<div className="content-box">
								<span className="icon icon-quote"></span>
								<div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
								<div className="text">Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.</div>
							</div>
							<div className="info-box">
								<figure className="thumb"><img src={TestimonialsImage1} alt="Image"/></figure>
								<h5 className="name">Alesha Brown</h5>
								<span className="designation">Co Founder</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    );
}
export default Testimonial;
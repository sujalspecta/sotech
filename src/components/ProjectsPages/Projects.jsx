import React from 'react';
import { Link } from 'react-router-dom';
// Importing the image files
import ProjectImage1 from '../../assets/images/resource/project-1.jpg';
import ProjectImage2 from '../../assets/images/resource/project-2.jpg';
import ProjectImage3 from '../../assets/images/resource/project-3.jpg';
import ProjectImage4 from '../../assets/images/resource/project-4.jpg';
function Projects() {
    return (
	
		<section className="">
			<div className="container">
				<div className="row g-3">
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="project-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link to={ProjectImage1} className="lightbox-image"><img src={ProjectImage1} alt="Image"/></Link></figure>
									<Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
								</div>
								<div className="content-box">
									<h4 className="title"><Link to="/page-project-details">Tech Solutions</Link></h4>
									<span className="cat">DESIGN / IDEAS</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="project-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link to={ProjectImage2} className="lightbox-image"><img src={ProjectImage2} alt="Image"/></Link></figure>
									<Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
								</div>
								<div className="content-box">
									<h4 className="title"><Link to="/page-project-details">Smart Visions</Link></h4>
									<span className="cat">DESIGN / IDEAS</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="project-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link to={ProjectImage3} className="lightbox-image"><img src={ProjectImage3} alt="Image"/></Link></figure>
									<Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
								</div>
								<div className="content-box">
									<h4 className="title"><Link to="/page-project-details">Platform Integration</Link></h4>
									<span className="cat">DESIGN / IDEAS</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="project-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link to={ProjectImage4} className="lightbox-image"><img src={ProjectImage4} alt="Image"/></Link></figure>
									<Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
								</div>
								<div className="content-box">
									<h4 className="title"><Link to="/page-project-details">Web Development</Link></h4>
									<span className="cat">DESIGN / IDEAS</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="project-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link to={ProjectImage1} className="lightbox-image"><img src={ProjectImage1} alt="Image"/></Link></figure>
									<Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
								</div>
								<div className="content-box">
									<h4 className="title"><Link to="/page-project-details">Tech Solutions</Link></h4>
									<span className="cat">DESIGN / IDEAS</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="project-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link to={ProjectImage2} className="lightbox-image"><img src={ProjectImage2} alt="Image"/></Link></figure>
									<Link to="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
								</div>
								<div className="content-box">
									<h4 className="title"><Link to="/page-project-details">Smart Visions</Link></h4>
									<span className="cat">DESIGN / IDEAS</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    );
}

export default Projects;

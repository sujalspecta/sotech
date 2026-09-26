import React from 'react';
import { Link } from 'react-router-dom';
import NewsImage1 from '../../assets/images/resource/news-4.jpg';
import NewsImage2 from '../../assets/images/resource/news-5.jpg';
import NewsImage3 from '../../assets/images/resource/news-6.jpg';

function News() {
    return (
    <section id="news" className="news-section alternate">
		<div className="bg-shape"/>
		<div className="auto-container">
			<div className="sec-title text-center light">
				<span className="sub-title">from the blog</span>
				<h2>News & Articles</h2>
			</div>
			<div className="row">
				<div className="news-block col-lg-4 col-md-6 wow fadeInUp">
					<div className="inner-box">
						<div className="image-box">
							<figure className="image"><Link to="/news-details"><img src={NewsImage1} alt="Image"/></Link></figure>
							<span className="date"><b>28</b> OCT</span>
						</div>
						<div className="content-box">
							<ul className="post-info">
								<li><i className="fa fa-user"></i> By Admin</li>
								<li><i className="fa fa-tag"></i> Business</li>
							</ul>
							<h3 className="title"><Link to="/news-details">10 Strategies to Attain Your Business toward Objectives now.</Link></h3>
						</div>
						<div className="bottom-box">
							<Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
							<div className="comments"><i className="fa fa-comments"></i> 05</div>
						</div>
					</div>
				</div>
				<div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
					<div className="inner-box">
						<div className="image-box">
							<figure className="image"><Link to="/news-details"><img src={NewsImage2} alt="Image"/></Link></figure>
							<span className="date"><b>28</b> OCT</span>
						</div>
						<div className="content-box">
							<ul className="post-info">
								<li><i className="fa fa-user"></i> By Admin</li>
								<li><i className="fa fa-tag"></i> Technology</li>
							</ul>
							<h3 className="title"><Link to="/news-details">Get Approaches to Achieving Your Business Goals today.</Link></h3>
						</div>
						<div className="bottom-box">
							<Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
							<div className="comments"><i className="fa fa-comments"></i> 05</div>
						</div>
					</div>
				</div>
				<div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
					<div className="inner-box">
						<div className="image-box">
							<figure className="image"><Link to="/news-details"><img src={NewsImage3} alt="Image"/></Link></figure>
							<span className="date"><b>28</b> OCT</span>
						</div>
						<div className="content-box">
							<ul className="post-info">
								<li><i className="fa fa-user"></i> By Admin</li>
								<li><i className="fa fa-tag"></i> Corporate</li>
							</ul>
							<h3 className="title"><Link to="/news-details">10 Paths to Accomplish Your Business Objectives Nowadays.</Link></h3>
						</div>
						<div className="bottom-box">
							<Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
							<div className="comments"><i className="fa fa-comments"></i> 05</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default News;
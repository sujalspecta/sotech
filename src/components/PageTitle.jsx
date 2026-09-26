import React from 'react';
import { Link } from 'react-router-dom';
import PageTitleBg from '../assets/images/background/page-title.jpg';

function HeroPageTitle({ title, breadcrumb = [] }) {
    return (
        <section className="page-title" style={{ backgroundImage: `url(${PageTitleBg})` }}>
            <div className="auto-container">
                <div className="title-outer">
                    <h1 className="title">{title}</h1>
                    {breadcrumb.length > 0 && (
                        <ul className="page-breadcrumb">
                            {breadcrumb.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                            ))}
                            <li>{title}</li>
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}

export default HeroPageTitle;
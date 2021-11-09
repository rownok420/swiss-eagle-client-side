import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="text-center">
        <div className="bg-img">
            <div className='container'>
                <h1 className="banner-heading">
                   The Watch Everyone Desire! <br /> Build for Men an Extraordinary Classic
                </h1>
                <p className="text-white py-3">
                    This is The best in class effective classes from the luxury brand swiss eagle high-quality <br /> watches into which a lot of care has gone in.
                </p>
                <Link to="/about">
                    <button className="home-button">
                        <i className="fas fa-user pe-2"></i>About us
                    </button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Banner;
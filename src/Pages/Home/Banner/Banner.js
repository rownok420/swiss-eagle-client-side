import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="text-center">
            <div className="bg-img">
                <div className="container">
                    <h1 className="banner-heading">
                        The Watch Everyone Can Desire! <br /> with Extraordinary
                        Classic
                    </h1>
                    <p className="text-white py-3">
                        This is The best in class effective classes from the
                        luxury brand swiss eagle high-quality watches.
                    </p>
                    <Link to="/explore">
                        <button className="home-button">
                            Explore <i className="fas fa-sign-out-alt ps-2"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;

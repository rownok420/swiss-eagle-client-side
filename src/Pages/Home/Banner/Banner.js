import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="text-center">
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
                            <i className="fas fa-user pe-2"></i>Explore
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;

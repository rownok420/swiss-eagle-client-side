import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'
import img from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <div className="text-center">
                <div className="container my-5">
                    <h1 className="hed-color">
                        Something went wrong, Page not found!
                    </h1>
                    <div>
                        <img
                            src={img}
                            className="w-50 p-5 notFound-img"
                            alt=""
                        />
                    </div>
                    <Link to="/home">
                        <button className="home-button">Go to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

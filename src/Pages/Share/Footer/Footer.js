import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from '../../../images/logo.png'

const Footer = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#00a3c8",
        textDecoration: "underline",
    };
    return (
        <div style={{ backgroundColor: "#E8F6EF" }}>
            <div className="container">
                <div className="row pt-4 pb-2">
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <img
                            style={{ height: "45px" }}
                            className="mb-3"
                            src={logo}
                            alt=""
                        />
                        <p>
                            Millions of people of all ages and from around the
                            world are improving their lives with us.We work with
                            a passion of taking challenges and creating new ones
                            in advertising sector.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h4>Top Products</h4>
                        <span>Edifice Watch</span>
                        <br />
                        <span>Casio Watch</span>
                        <br />
                        <span>Fossil Watch</span>
                        <br />
                        <span>Fossil Watch</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h4>Quic Links</h4>
                        <NavLink
                            className=" text-decoration-none"
                            activeStyle={activeStyle}
                            to="/home"
                        >
                            Home
                        </NavLink>
                        <br />
                        <NavLink
                            className=" text-decoration-none"
                            activeStyle={activeStyle}
                            to="/about"
                        >
                            About us
                        </NavLink>
                        <br />
                        <NavLink
                            className=" text-decoration-none"
                            activeStyle={activeStyle}
                            to="/explore"
                        >
                            Explore
                        </NavLink>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h4>Follow us</h4>
                        <p>
                            Subscribe our Youtube channel to get our latest
                            update & news
                        </p>
                        <div className="d-flex justify-content-around mt-5">
                            <a style={{color: "#0f92f3"}} href="https://web.facebook.com/rownok.ritu.1">
                                <i className="fab fa-2x fa-facebook-square"></i>
                            </a>
                            <a style={{color: "#0f92f3"}} href="https://www.linkedin.com/in/md-rownok-jahan/">
                                <i className="fab fa-2x fa-linkedin-in"></i>
                            </a>
                            <a style={{color: "#0f92f3"}} href="https://twitter.com/?lang=en">
                                <i className="fab fa-2x fa-twitter"></i>
                            </a>
                            <a style={{color: "#0f92f3"}} href="https://www.youtube.com/">
                                <i className="fab fa-2x fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container pb-3">
                    <h5 className="text-center ">
                        Copyright &copy; 2021 All rights reserved | This Site
                        Developed by <br />{" "}
                        <span
                            style={{ color: "#FF3614" }}
                            className=" mt-2 d-inline-block"
                        >
                            {" "}
                            Md. Rownok Jahan
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;

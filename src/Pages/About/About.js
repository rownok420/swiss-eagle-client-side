import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import Header from "../Share/Header/Header";
import Subscribe from "../Share/Subscribe/Subscribe";
import "./About.css";
import img from '../../images/about2.jpg'

const About = () => {
    return (
        <div>
            <Header />
            <div className="text-center">
                <div className="about-background">
                    <h1 className="dep-heading">About Us</h1>
                    <p className="text-white">
                        Exploring means learning. Bring new experiences from
                        each journey. Meet different cultures, traditions and
                        landscapes. <br /> Choose your next destination and
                        start your trip.
                    </p>
                    <Link to="/home">
                        <button className="home-button">
                            <i className="fas fa-backward pe-2"></i> Back home
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    className="img-fluid h-100 mt-4 mb-4 rounded-3 shadow"
                                    src={img}
                                    alt=""
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="m-3">
                                    <div>
                                        <h1
                                            style={{
                                                color: "#ff7c5b",
                                                lineHeight: "1.1em",
                                            }}
                                            className="hed-color"
                                        >
                                            We’re Certified & Expert Travel
                                            Agency
                                        </h1>
                                        <p className="text-muted my-3">
                                            But I must explain to you how all
                                            this mistaken idea of denouncing
                                            pleasure and praising pain was born
                                            will give
                                        </p>
                                    </div>
                                    <div>
                                        <div className="d-flex">
                                            <div className="d-flex justify-content-center align-items-center me-5">
                                                <h4
                                                    style={{
                                                        backgroundColor:
                                                            "#00a3c8",
                                                    }}
                                                    className="p-2 rounded-circle text-white"
                                                >
                                                    01
                                                </h4>
                                            </div>
                                            <div>
                                                <h3>
                                                    Professional & Expert Agency
                                                </h3>
                                                <p>
                                                    You’ll work with a care
                                                    coordinator at your local
                                                    office to set a care
                                                    schedule.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex my-2">
                                            <div className="d-flex justify-content-center align-items-center me-5">
                                                <h4
                                                    style={{
                                                        backgroundColor:
                                                            "#00a3c8",
                                                    }}
                                                    className="p-2 rounded-circle text-white"
                                                >
                                                    02
                                                </h4>
                                            </div>
                                            <div>
                                                <h3>
                                                    Quality Servicing Agency
                                                </h3>
                                                <p>
                                                    You’ll work with a care
                                                    coordinator at your local
                                                    office to set a care
                                                    schedule.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="d-flex justify-content-center align-items-center me-5">
                                                <h4
                                                    style={{
                                                        backgroundColor:
                                                            "#00a3c8",
                                                    }}
                                                    className="p-2 rounded-circle text-white"
                                                >
                                                    03
                                                </h4>
                                            </div>
                                            <div>
                                                <h3>Awards Winning Company</h3>
                                                <p>
                                                    You’ll work with a care
                                                    coordinator at your local
                                                    office to set a care
                                                    schedule.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Subscribe />
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default About;

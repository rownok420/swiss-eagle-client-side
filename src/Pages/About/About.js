import React, { useEffect } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import Header from "../Share/Header/Header";
import Subscribe from "../Share/Subscribe/Subscribe";
import "./About.css";
import img from "../../images/about2.jpg";
import Review from "../Home/Review/Review";

const About = () => {
    useEffect(() => {
        document.title = 'Swiss Eagle | About Us'
    }, []);

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
                                    <div className="mb-5">
                                        <h1
                                            style={{
                                                lineHeight: "1.1em",
                                            }}
                                            className="hed-color"
                                        >
                                            We’re Certified & Expert Agency
                                        </h1>
                                        <p className="text-muted my-3">
                                            But I must explain to you how all
                                            this mistaken idea of denouncing
                                            pleasure and praising pain was born
                                            will give
                                        </p>
                                    </div>
                                    <Accordion defaultActiveKey="0" flush>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <h4>
                                                    Professional & Expert Agency
                                                </h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                You’ll work with a care
                                                coordinator at your local office
                                                to set a care schedule.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <h4>
                                                    Quality Servicing Agency
                                                </h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Exploring means learning. Bring
                                                new experiences from each
                                                journey. Meet different
                                                cultures, traditions and
                                                landscapes. Choose your next
                                                destination and start your
                                                trip.You’ll work with a care
                                                coordinator at your local office
                                                to set a care schedule.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <h4>Awards Winning Company</h4>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                You’ll work with a care
                                                coordinator at your local office
                                                to set a care schedule.Exploring
                                                means learning. Bring new
                                                experiences from each journey.
                                                Meet different cultures,
                                                traditions and landscapes.
                                                Choose your next destination and
                                                start your trip.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Review />
                    <Subscribe />
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default About;

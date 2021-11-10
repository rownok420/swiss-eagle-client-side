import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import sideImg from "../../../images/side-1.jpg";
import "./Premier.css";

const Premier = () => {
    return (
        <div className="top-margin">
            <Container>
                <Row>
                    <Col sm={12} md={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <img
                                className="img-fluid mt-4 mb-5"
                                src={sideImg}
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col sm={12} md={6}  >
                        <div>
                            <div className="text-left">
                                <div className="my-4">
                                    <h1 className="mb-4 hed-color">
                                        UK Premier Store for Wrist Watches
                                    </h1>
                                </div>
                                <div>
                                    <p className='mb-4'>
                                        Life is made up of two things Time and
                                        Love.Time is free but it is priceless.
                                        You can’t own it but you can use it. You
                                        can’t keep it but you can spend it. Once
                                        you have lost it you can never get it
                                        back. Love multiplies when you give it!
                                    </p>{" "}
                                    <p className='mb-4'>
                                        When it comes to exploring exotic
                                        places, the choices are numerous.
                                        Whether you like peaceful destinations
                                        or vibrant landscapes, we have offers
                                        for you.
                                    </p>
                                    <p>
                                        Exploring means learning. Bring new
                                        experiences from each journey. Meet
                                        different cultures, traditions and
                                        landscapes. Choose your next destination
                                        and start your trip.
                                    </p>
                                </div>
                                <div>
                                    <Link to="/explore">
                                        <button className="home-button">
                                            Explore
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Premier;

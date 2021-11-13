import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../../images/contact-2.jpg'
import './Contact.css'

const Contact = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" style={{ backgroundColor: "#f3f2f0" }} className="py-5">
            <div className="container">
            <div className="text-center hed-color">
                    <h1 className="mb-5">Contact Us</h1>
                </div>
                <div>
                    <div className="my-5">
                        <Row>
                            <Col sm={12} md={6}>
                                <div className="d-flex justify-content-center align-items-center contact-img-container">
                                    <img
                                        className="img-fluid mt-4 mb-5 contact-img rounded"
                                        src={img}
                                        alt=""
                                    />
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div>
                                    <div>
                                        <h3
                                            className=" mt-3 text-center hed-color"
                                        >
                                            Get In Touch
                                        </h3>
                                    </div>
                                    <form className="w-75 m-auto form-style">
                                        <div className="mb-3  text-start">
                                            <label className="mb-2 fw-bold ms-2">
                                                Name:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Write your name"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3 text-start">
                                            <label className="mb-2 fw-bold ms-2">
                                                Email address:
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleFormControlInput2"
                                                placeholder="name@example.com"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3 text-start">
                                            <label className="mb-2 fw-bold ms-2">
                                                Feedback:
                                            </label>
                                            <textarea
                                                style={{ resize: "none" }}
                                                className="form-control"
                                                id="exampleFormControlTextarea3"
                                                rows="5"
                                                placeholder="Write your feedback"
                                            ></textarea>
                                        </div>
                                        <div className="mb-3 pb-5">
                                            <button
                                                type="submit"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="home-button m-2"
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="reset"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="home-button m-2"
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
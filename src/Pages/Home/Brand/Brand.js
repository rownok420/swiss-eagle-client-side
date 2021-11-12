import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Brand.css";
import img1 from "../../../images/brand/brand-1.png";
import img2 from "../../../images/brand/brand-2.png";
import img3 from "../../../images/brand/brand-3.png";

const Brand = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="top-margin">
            <Container>
                <div className="text-center">
                    <h1 className="hed-color mb-3">Special Edition</h1>
                    <p>
                        Whether it be to add to your collection, that first
                        special wristwatch or the <br /> restoration of a much loved
                        heirloom we are here to help.
                    </p>
                </div>
                <div className="mt-5">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img1}
                                    />
                                    <h3 className="place">DRESS WATCHES</h3>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img2}
                                    />
                                    <h3 className="place">SPORTS WATCHES</h3>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img3}
                                    />
                                    <h3 className="place">SMART WATCHES</h3>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Brand;

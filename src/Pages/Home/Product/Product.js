import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
    const { name, price, description, image, _id } = product;
    return (
        <Col data-aos="fade-up" data-aos-duration="1000">
            <Card className="h-100 card-style card-hover-style">
                <div className="card-img-container">
                    <Card.Img
                        className="card-img-style"
                        variant="top"
                        src={image}
                    />
                </div>
                <Card.Body>
                    <div className="my-3 d-flex justify-content-between align-items-center">
                        <Card.Title>{name?.slice(0, 26)}</Card.Title>
                        <p className="fw-bold" style={{ color: "#ff7c5b" }}>
                            ${price}
                        </p>
                    </div>
                    <Card.Text>{description?.slice(0, 100)}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link  to={`/placeOrder/${_id}`}>
                        <button className="home-button mb-2">
                            Place Order
                        </button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Product;

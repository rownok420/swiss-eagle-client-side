import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Product.css'

const Product = ({product}) => {
    const {name, price, description, image} = product;
    return (
        <Col>
            <Card className="h-100 card-style card-hover-style">
                <div className="card-img-container">
                    <Card.Img
                        className="card-img-style"
                        variant="top"
                        src={image}
                    />
                </div>
                <Card.Body>
                    <div className="my-3">
                        <Card.Title>{name.slice(0, 26)}</Card.Title>
                    </div>
                    <div>
                        <p style={{ color: "#ff7c5b" }}>${price}</p>
                    </div>
                    <Card.Text>{description.slice(0, 100)}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    {/* <Link to={`/placeorder/${_id}`}> */}
                        <button className="home-button mb-2">
                            Place Order
                        </button>
                    {/* </Link> */}
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Product;
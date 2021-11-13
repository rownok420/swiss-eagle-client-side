import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAllProducts from "../../../Hooks/useAllProducts";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
    const [allProducts] = useAllProducts();

    return (
        <div className="top-margin">
            <Container>
                <div className="text-center hed-color">
                    <h6>MODERN & BEAUTIFUL</h6>
                    <h1 className="mb-5">Our Most Popular Products</h1>
                </div>
                <div>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {allProducts.map((product) => (
                            <Product key={product._id} product={product} />
                        ))}
                    </Row>
                </div>
                <div className="text-center mt-2 mb-5">
                <Link to="/explore">
                    <button className="home-button">More Products <i className="fas fa-sign-out-alt ps-2"></i></button>
                </Link>
                </div>
            </Container>
        </div>
    );
};

export default Products;

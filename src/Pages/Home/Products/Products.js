import React from "react";
import { Container, Row } from "react-bootstrap";
import useProducts from "../../../Hooks/useProducts";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
    const [products] = useProducts();
    return (
        <div className="mb-5 top-margin">
            <Container>
                <div className="text-center hed-color">
                    <h6>MODERN & BEAUTIFUL</h6>
                    <h1 className="mb-5">Our Most Popular Products</h1>
                </div>
                <div>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {products.map((product) => (
                            <Product key={product.price} product={product} />
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Products;

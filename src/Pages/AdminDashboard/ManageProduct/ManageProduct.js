import React from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import useProducts from "../../../Hooks/useProducts";
import "./ManageProduct.css";

const ManageProduct = () => {
    const [products, setProducts] = useProducts();

    if (products.length === 0) {
        return (
            <div
                style={{ minHeight: "100vh" }}
                className="d-flex my-5 justify-content-center align-items-center"
            >
                <Spinner animation="border" variant="info" />
            </div>
        );
    }

    // handle delete product
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are you sure!!! you want to delete product?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        Swal.fire(
                            "Sorry to say!",
                            "Successfully deleted!",
                            "success"
                        );
                        const remainingProduct = products?.filter(
                            (product) => product._id !== id
                        );
                        setProducts(remainingProduct);
                    }
                });
        }
    };

    return (
        <div className="my-5">
            <Container>
                <div className="text-center">
                    <h1 className="hed-color mb-3">Manage All Products</h1>
                    <hr className="dotted-hr" />
                </div>
                <div className="mt-5">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {products.map((product) => (
                            <Col key={product._id}>
                                <Card className="h-100 card-style card-hover-style">
                                    <div className="card-img-container">
                                        <Card.Img
                                            className="card-img-style"
                                            variant="top"
                                            src={product?.image}
                                        />
                                    </div>
                                    <Card.Body>
                                        <div className="my-3 d-flex justify-content-between align-items-center">
                                            <Card.Title>
                                                {product?.name?.slice(0, 26)}
                                            </Card.Title>
                                            <p
                                                className="fw-bold"
                                                style={{ color: "#ff7c5b" }}
                                            >
                                                ${product?.price}
                                            </p>
                                        </div>
                                        <Card.Text>
                                            {product?.description?.slice(
                                                0,
                                                100
                                            )}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <button
                                            onClick={() =>
                                                handleDeleteOrder(product?._id)
                                            }
                                            className="home-button mb-2"
                                        >
                                            Delete Product
                                        </button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ManageProduct;

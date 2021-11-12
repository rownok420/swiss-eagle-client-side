import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyOrders(data);
            });
    }, [email]);

    // handle delete user
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are you sure!!! you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        Swal.fire(
                            "Sorry to say!",
                            "Successfully deleted your Order!",
                            "success"
                        );
                        const remainingProduct = myOrders?.filter(
                            (product) => product._id !== id
                        );
                        setMyOrders(remainingProduct);
                    }
                });
        }
    };

    return (
        <div className="my-5">
            <Container>
                <div className="text-center">
                    <h1 className="hed-color mb-3">Show Your Orders</h1>
                    <p>
                        Life is made up of two things Time and Love.Time is free
                        but it is priceless. You can’t own it <br /> but you can
                        use it. You can’t keep it but you can spend it.
                    </p>
                </div>
                <div className="mt-5">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {myOrders.map((product) => (
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
                                                {product?.serviceName?.slice(
                                                    0,
                                                    26
                                                )}
                                            </Card.Title>
                                            <p
                                                className="fw-bold"
                                                style={{ color: "#ff7c5b" }}
                                            >
                                                ${product?.price}
                                            </p>
                                        </div>
                                        <small className="text-muted">
                                            Booked by: {product?.name}
                                        </small>
                                        <div className="mt-3">
                                            {product?.status === "Pending" ? (
                                                <h6>
                                                    Order Status:{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {product?.status}
                                                    </span>
                                                </h6>
                                            ) : (
                                                <h6>
                                                    Order Status:{" "}
                                                    <span
                                                        style={{
                                                            color: "green",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {product?.status}
                                                    </span>
                                                </h6>
                                            )}
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <button
                                            onClick={() =>
                                                handleDeleteOrder(product?._id)
                                            }
                                            style={{
                                                backgroundColor: "#FF3614",
                                            }}
                                            className="home-button mb-2"
                                        >
                                            Cancel Order
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

export default MyOrders;

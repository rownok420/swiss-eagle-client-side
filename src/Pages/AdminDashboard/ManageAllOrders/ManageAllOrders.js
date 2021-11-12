import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [update, setUpdate] = useState(null);

    useEffect(() => {
        fetch("https://thawing-caverns-72785.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, [update]);

    // handle update product
    const handleUpdateStatus = (id) => {
        fetch(`https://thawing-caverns-72785.herokuapp.com/allOrders/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orders),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Good job!", "Your order confirmed", "success");
                    setUpdate(!update);
                } else {
                    setUpdate(false);
                }
            });
    };

    if (orders.length === 0) {
        return (
            <div
                style={{ minHeight: "100vh" }}
                className="d-flex my-5 justify-content-center align-items-center"
            >
                <Spinner animation="border" variant="info" />
            </div>
        );
    }

    // handle delete user
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are you sure!!! you want to delete?");
        if (proceed) {
            fetch(`https://thawing-caverns-72785.herokuapp.com/deleteOrder/${id}`, {
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
                        const remainingProduct = orders?.filter(
                            (product) => product._id !== id
                        );
                        setOrders(remainingProduct);
                    }
                });
        }
    };
    return (
        <div className="my-5">
            <Container>
                <div className="text-center">
                    <h1 className="hed-color mb-3">Manage All Orders</h1>
                    <hr className="dotted-hr" />
                </div>
                <div className="mt-5">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {orders.map((order) => (
                            <Col key={order._id}>
                                <Card className="h-100 card-style card-hover-style">
                                    <div className="card-img-container">
                                        <Card.Img
                                            className="card-img-style"
                                            variant="top"
                                            src={order?.image}
                                        />
                                    </div>
                                    <Card.Body>
                                        <div className="my-3 d-flex justify-content-between align-items-center">
                                            <Card.Title>
                                                {order?.serviceName?.slice(
                                                    0,
                                                    26
                                                )}
                                            </Card.Title>
                                            <p
                                                className="fw-bold"
                                                style={{ color: "#ff7c5b" }}
                                            >
                                                ${order?.price}
                                            </p>
                                        </div>
                                        <small className="text-muted">
                                            Booked by: {order?.name}
                                        </small>
                                        <div className="mt-3">
                                            {order?.status === "Pending" ? (
                                                <h6>
                                                    Order Status:{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {order?.status}
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
                                                        {order?.status}
                                                    </span>
                                                </h6>
                                            )}
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <button
                                            onClick={() =>
                                                handleUpdateStatus(order?._id)
                                            }
                                            className="home-button w-100"
                                        >
                                            Confirm Order
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDeleteOrder(order?._id)
                                            }
                                            style={{
                                                backgroundColor: "#FF3614",
                                            }}
                                            className="home-button  mb-2 w-100"
                                        >
                                            Delete Order
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

export default ManageAllOrders;

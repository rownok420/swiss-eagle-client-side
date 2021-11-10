import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import Subscribe from "../Share/Subscribe/Subscribe";
import "./PlaceOrder.css";

const PlaceOrder = () => {
    // useEffect(() => {
    //     document.title = 'Travel On : Place order'
    // }, []);

    const { user } = useAuth();
    const { id } = useParams();
    const [service, setService] = useState({});
    const history = useHistory();

    const nameRef = useRef();
    const emailRef = useRef();
    const serviceRef = useRef();
    const priceRef = useRef();
    const addressRrf = useRef();

    useEffect(() => {
        fetch(`http://localhost:5000/placeOrder/${id}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, [id]);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const serviceName = serviceRef.current.value;
        const price = priceRef.current.value;
        const address = addressRrf.current.value;
        const status = "Pending";
        const image = service.image;
        const order = {
            name,
            email,
            serviceName,
            price,
            address,
            status,
            image,
        };
        // order.status = "Pending";
        console.log(order);

        fetch("http://localhost:5000/placeOrder", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire("Good job!", "Order place successful", "success");
                    history.push("/home");
                }
            });
    };
    return (
        <div>
            <div className="text-center">
                <div className="place-order-background">
                    <h1 className="dep-heading">Last Minute Offers</h1>
                    <p className="text-white">
                        Book a awesome watch at great price! Grab our last
                        minute offer and pack the things for the journey <br />{" "}
                        you dream about. See our recommendations.
                    </p>
                    <Link to="/home">
                        <button className="home-button">
                            <i className="fas fa-backward pe-2"></i> Back home
                        </button>
                    </Link>
                </div>
            </div>

            <div style={{ backgroundClip: "#f3f2f0" }}>
                <div className="my-5">
                    <Container>
                        <div className="text-center">
                            <h1
                                style={{ color: "#ff7c5b" }}
                                className="hed-color mb-3"
                            >
                                Place Your Orders
                            </h1>
                        </div>
                        <div>
                            <Row>
                                <Col
                                    sm={12}
                                    md={6}
                                    className="d-flex align-items-center justify-content-center"
                                >
                                    <div>
                                        <Card className="h-100 card-style card-hover-style mt-5">
                                            <div className="card-img-container">
                                                <Card.Img
                                                    className="card-img-style"
                                                    variant="top"
                                                    src={service?.image}
                                                />
                                            </div>
                                            <Card.Body>
                                                <div className="my-3 d-flex justify-content-between align-items-center">
                                                    <Card.Title>
                                                        {service?.name?.slice(
                                                            0,
                                                            26
                                                        )}
                                                    </Card.Title>
                                                    <p
                                                        className="fw-bold"
                                                        style={{
                                                            color: "#ff7c5b",
                                                        }}
                                                    >
                                                        ${service?.price}
                                                    </p>
                                                </div>
                                                <Card.Text>
                                                    {service?.description?.slice(
                                                        0,
                                                        100
                                                    )}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-center">
                                                <Link to="/home">
                                                    <button className="home-button mb-2">
                                                        Cancel
                                                    </button>
                                                </Link>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                </Col>
                                <Col
                                    sm={12}
                                    md={6}
                                    className="d-flex align-items-center justify-content-center"
                                >
                                    <div className=" place-order mt-5">
                                        <form onSubmit={handlePlaceOrder}>
                                            <input
                                                type="text"
                                                ref={nameRef}
                                                readOnly
                                                value={user?.displayName || ""}
                                            />
                                            <br />
                                            <input
                                                type="email"
                                                ref={emailRef}
                                                readOnly
                                                value={user?.email || ""}
                                            />
                                            <br />
                                            <div className="d-flex justify-content-between w-100">
                                                <input
                                                    type="text"
                                                    ref={serviceRef}
                                                    readOnly
                                                    value={service?.name || ""}
                                                />
                                                <input
                                                    type="text"
                                                    ref={priceRef}
                                                    readOnly
                                                    value={
                                                        service?.price + " $" ||
                                                        ""
                                                    }
                                                />
                                            </div>
                                            <br />
                                            <input
                                                type="text"
                                                placeholder="Your address"
                                                ref={addressRrf}
                                                required
                                            />
                                            <br />
                                            <input
                                                type="number"
                                                placeholder="Phone number"
                                                required
                                            />
                                            <br />
                                            <input
                                                className="home-button"
                                                type="submit"
                                                value="Place Order"
                                            />
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
            <Subscribe />
        </div>
    );
};

export default PlaceOrder;

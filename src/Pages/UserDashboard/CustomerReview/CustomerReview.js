import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import "./CustomerReview.css";

const CustomerReview = () => {
    const { user } = useAuth();
    const history = useHistory();

    const nameRef = useRef();
    const addressRef = useRef();
    const ratingRef = useRef();
    const descRef = useRef();

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const address = addressRef.current.value;
        const rating = ratingRef.current.value;
        const description = descRef.current.value;
        const image = user.photoURL;

        const userRating = {
            name,
            address,
            rating,
            description,
            image,
        };
        console.log(userRating);

        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userRating),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire(
                        "Respectfully thanked!",
                        "Review added successfully",
                        "success"
                    );
                    history.push("/home");
                }
            });
    };

    return (
        <div>
            <div className="my-5">
                <h1 className="text-center hed-color">Review Us</h1>
                <hr className="dotted-hr" />
            </div>
            <div>
                <Container>
                    <Row>
                        <Col
                        // className="d-flex align-items-center justify-content-center"
                        >
                            <div>
                                <form
                                    className="rating-style"
                                    onSubmit={handlePlaceOrder}
                                >
                                    <label htmlFor="">Name</label>
                                    <br />
                                    <input
                                        style={{ padding: "10px" }}
                                        className="form-control"
                                        type="text"
                                        ref={nameRef}
                                        readOnly
                                        value={user?.displayName || ""}
                                    />

                                    <br />

                                    <label htmlFor="">Address</label>
                                    <br />
                                    <input
                                        style={{ padding: "10px" }}
                                        className="form-control"
                                        type="text"
                                        placeholder="Your address"
                                        ref={addressRef}
                                        required
                                    />

                                    <br />
                                    <label htmlFor="">Rating</label>
                                    <br />
                                    <select
                                        style={{ padding: "10px" }}
                                        ref={ratingRef}
                                        required
                                        className="form-control"
                                    >
                                        <option>Select Rating</option>
                                        <option value="1">1</option>
                                        <option value="1.5">1.5</option>
                                        <option value="2">2</option>
                                        <option value="2.5">2.5</option>
                                        <option value="3">3</option>
                                        <option value="3.5">3.5</option>
                                        <option value="4">4</option>
                                        <option value="4.5">4.5</option>
                                        <option value="5">5</option>
                                    </select>

                                    <br />
                                    <label htmlFor="">Description</label>
                                    <br />
                                    <textarea
                                        style={{ resize: "none" }}
                                        rows="4"
                                        cols="2"
                                        className="w-100"
                                        type="text"
                                        placeholder="Description"
                                        ref={descRef}
                                        required
                                    />
                                    <br />
                                    <input
                                        className="home-button"
                                        type="submit"
                                    />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CustomerReview;

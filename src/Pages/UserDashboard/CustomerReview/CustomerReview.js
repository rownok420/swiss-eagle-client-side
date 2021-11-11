import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import "./CustomerReview.css";

const CustomerReview = () => {
    const { user } = useAuth();

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
        const image = user.image;

        const userRating = {
            name,
            address,
            rating,
            description,
            image,
        };
        console.log(userRating);

        fetch("", {
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
                        "Good job!",
                        "Review added successfully",
                        "success"
                    );
                }
            });
    };

    return (
        <div>
            <div className="my-5">
                <h1 className="text-center hed-color">Review Us</h1>
            </div>
            <div>
                <Container>
                    <div className="add-rating mt-5">
                        <div className="add-rating-width">
                            <form onSubmit={handlePlaceOrder}>
                                <label htmlFor="">
                                    Name
                                    <br />
                                    <input
                                        className="form-control"
                                        type="text"
                                        ref={nameRef}
                                        readOnly
                                        value={user?.displayName || ""}
                                    />
                                </label>

                                <br />

                                <label htmlFor="">
                                    Address
                                    <br />
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Your address"
                                        ref={addressRef}
                                        required
                                    />
                                </label>

                                <br />
                                <label htmlFor="">
                                    Rating
                                    <br />
                                    {/* <input
                                        className="form-control"
                                        type="number"
                                        placeholder="Rating"
                                        ref={ratingRef}
                                        required
                                    /> */}
                                    <select required className="form-control">
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
                                </label>

                                <br />
                                <label htmlFor="">
                                    Description
                                    <br />
                                    <textarea
                                        style={{ resize: "none" }}
                                        rows="4"
                                        cols="2"
                                        type="text"
                                        placeholder="Description"
                                        ref={descRef}
                                        required
                                    />
                                </label>
                                <input className="home-button" type="submit" />
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default CustomerReview;

{/* <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>
            Select Review <span style={{ color: "red" }}>*</span>
        </Form.Label>
        <select required className="form-control" {...register("rating")}>
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
    </Form.Group>
</Row>; */}

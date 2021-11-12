import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AddProduct.css";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
    // useEffect(() => {
    //     document.title = 'Swiss Eagle : Add service'
    // }, []);

    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire(
                        "Good job!",
                        "Product added successfully!",
                        "success"
                    );
                    history.push("/home");
                    reset();
                }
            });
    };
    return (
        <div>
            <div style={{ backgroundClip: "#f3f2f0" }}>
                <div className="my-5">
                    <Container>
                        <div className="text-center">
                            <h1
                                style={{ color: "#ff7c5b" }}
                                className="hed-color mb-3"
                            >
                                Add Your Marvelous Product
                            </h1>
                            <p>
                                Show Product details, galleries, allow the users
                                to search & more. And our simple <br /> booking
                                form allows visitors to easily add our next
                                collections.
                            </p>
                        </div>
                        <div>
                            <Row>
                                <Col>
                                    <div className=" mt-5">
                                        <form
                                            className="add-services d-flex flex-column justify-content-center align-items-center"
                                            onSubmit={handleSubmit(onSubmit)}
                                        >
                                            <input
                                                type="text"
                                                {...register("name", {
                                                    required: true,
                                                    maxLength: 20,
                                                })}
                                                placeholder="Product name"
                                            />

                                            <input
                                                type="number"
                                                {...register("price", {
                                                    required: true,
                                                    maxLength: 20,
                                                })}
                                                placeholder="price"
                                            />

                                            <input
                                                type="text"
                                                {...register("image", {
                                                    required: true,
                                                })}
                                                placeholder="Photo url(https://i.ibb.co/MgDbgXB/place-6.jpg)"
                                            />
                                            <textarea
                                                style={{ resize: "none" }}
                                                rows="4"
                                                cols="2"
                                                type="text"
                                                {...register("description", {
                                                    required: true,
                                                })}
                                                placeholder="Description"
                                            />
                                            <input
                                                className="home-button"
                                                type="submit"
                                            />
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;

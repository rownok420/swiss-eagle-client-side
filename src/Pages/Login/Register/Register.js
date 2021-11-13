import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
    const {
        setUser,
        signInUsingGoogle,
        error,
        setError,
        registerNewUser,
        setUserName,
        setIsLoading,
    } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegisterUser = (e) => {
        e.preventDefault();
        registerNewUser(email, password, name)
            .then((result) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to database
                saveUser(email, name, "POST");
                setError("");
                setUserName(name);
                history.push(redirect_uri);
                Swal.fire("Good job!", "successfully Registered!", "success");
            })
            .catch((error) => {
                setError(error.message);
                Swal.fire("Something Went Wrong", "success");
            })
            .finally(() => setIsLoading(false));
    };

    // google authentication
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                // save user to database
                saveUser(result.user.email, result.user.displayName, "PUT");
                setError("");
                history.push(redirect_uri);
                Swal.fire("Good job!", "successfully Registered!", "success");
            })
            .catch((err) => {
                setError(err.message);
                Swal.fire("Something Went Wrong", "Wrong");
            })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName, method) => {
        const users = { email, displayName };
        // sent to database
        fetch("https://thawing-caverns-72785.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(users),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                }
            });
    };

    return (
        <div style={{ backgroundColor: "#f4f7fc" }}>
            <Container>
                <Row>
                    <Col
                        style={{ height: "100vh" }}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <div className="login-style">
                            <div>
                                <h2 className="mb-2 fw-bold hed-color pt-4">
                                    Create an Account
                                </h2>
                                <p className="text-muted mb-4">
                                    Setup a new account in a minute
                                </p>
                            </div>
                            <div>
                                <Form
                                    onSubmit={handleRegisterUser}
                                    // className="w-100"
                                >
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicName"
                                    >
                                        <Form.Control
                                            onBlur={handleNameChange}
                                            type="text"
                                            placeholder="Your name"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            onBlur={handleEmailChange}
                                            type="email"
                                            placeholder="Email address"
                                            required
                                        />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with
                                            anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Control
                                            onBlur={handlePasswordChange}
                                            type="password"
                                            placeholder="Password at lest 6 characters"
                                            required
                                        />
                                    </Form.Group>
                                    <div>
                                        <p className="text-warning">{error}</p>
                                    </div>
                                    <div>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicCheckbox"
                                        >
                                            <Link
                                                to="/login"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <p
                                                    className="text-center"
                                                    style={{ color: "#00a3c8" }}
                                                >
                                                    Already have an account?
                                                    Login Now
                                                </p>
                                            </Link>
                                        </Form.Group>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="register-btn rounded-2"
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </Form>
                            </div>

                            <div className="mt-4 text-center">
                                <small style={{ color: "#00a3c8" }}>
                                    or register with
                                </small>
                                <div
                                    onClick={handleGoogleLogin}
                                    role="button"
                                    className="google-box"
                                >
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fab fab-icon fa-2x fa-google ms-2 me-3"></i>
                                        <h5>Google Sign in</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mb-4 mt-3 ">
                                <Link to="/home">
                                    <button className="register-btn rounded-2">
                                        Go Home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;

import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import loginImg from "../../../images/login.png";

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
            })
            .catch((error) => {
                setError(error.message);
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
            })
            .catch((err) => {
                setError(err.message);
                console.log(err.message);
            })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName, method) => {
        const users = { email, displayName };
        // sent to database
        fetch("http://localhost:5000/users", {
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
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="mb-4">
                            <img className="w-100" src={loginImg} alt="" />
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <div>
                            <div>
                                <h2
                                    className="mb-2 fw-bold"
                                    style={{ color: "#00a3c8" }}
                                >
                                    Create an Account
                                </h2>
                                <p className="text-muted mb-4">
                                    Setup a new account in a minute
                                </p>
                            </div>
                            <div>
                                <Form
                                    onSubmit={handleRegisterUser}
                                    className="w-100"
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
                                                <p style={{ color: "#00a3c8" }}>
                                                    Already have an account?
                                                    Login Now
                                                </p>
                                            </Link>
                                        </Form.Group>
                                    </div>
                                    <button
                                        className="login-btn rounded-2"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </Form>
                            </div>

                            <div className="mt-4 mb-5 text-center">
                                <small style={{ color: "#00a3c8" }}>
                                    or register with
                                </small>
                                <div className="mt-4">
                                    <i
                                        role="button"
                                        style={{ color: "#00a3c8" }}
                                        onClick={handleGoogleLogin}
                                        className="fab fab-icon fa-2x fa-google"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;

import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
    const { signInUsingGoogle, error, setError, processLogin, setIsLoading } =
        useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/dashboard";

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegisterUser = (e) => {
        e.preventDefault();
        processLogin(email, password)
            .then((result) => {
                // const user = result.user;
                // console.log(user);
                setError("");
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
                // console.log(result.user);
                history.push(redirect_uri);
            })
            .catch((err) => {
                setError(err.message);
                console.log(err.message);
            })
            .finally(() => setIsLoading(false));
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
                                    Login Your Account
                                </h2>
                                <p className="text-muted mb-4">
                                    Setup your account in a minute
                                </p>
                            </div>
                            <div>
                                <Form
                                    onSubmit={handleRegisterUser}
                                    className="w-100"
                                >
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
                                                to="/register"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <p className="text-center" style={{ color: "#00a3c8" }}>
                                                    Don't have any
                                                    account? Register Now
                                                </p>
                                            </Link>
                                        </Form.Group>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="register-btn rounded-2"
                                            type="submit"
                                        >
                                            Login
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

export default Login;

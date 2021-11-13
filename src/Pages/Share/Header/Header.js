import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import useAuth from "../../../Hooks/useAuth";
import userImg from "../../../images/user.png";

const Header = () => {
    const { user, logOut } = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "#00a3c8",
    };
    return (
        <Navbar className="nav-style sticky-top" expand="xl">
            <Container fluid>
                <Navbar.Brand>
                    <NavLink to="/">
                        <img
                            className="logo"
                            src={logo}
                            alt="logo"
                        />
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="navbarScroll"
                    className="bg-white"
                />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                        <NavLink activeStyle={activeStyle} to="/home">
                            Home
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/about">
                            About us
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/explore">
                            Explore
                        </NavLink>
                        {user.email && (
                            <NavLink activeStyle={activeStyle} to="/dashboard">
                                Dashboard
                            </NavLink>
                        )}
                    </Nav>

                    {user.email ? (
                        <div>
                            <NavLink to="/register">
                                <button
                                    onClick={logOut}
                                    className="rounded-pill login-btn"
                                >
                                    Log out
                                </button>
                            </NavLink>
                        </div>
                    ) : (
                        <div>
                            <NavLink to="/register">
                                <button className="rounded-pill login-btn">
                                    Login
                                </button>
                            </NavLink>
                        </div>
                    )}

                    {user?.email && (
                        <Navbar.Brand style={{ marginRight: "0px" }}>
                            <img
                                src={user?.photoURL ? user.photoURL : userImg}
                                width="35"
                                height="35"
                                className="d-inline-block align-top rounded-circle m-2 d-none d-lg-block"
                                alt=""
                            />
                        </Navbar.Brand>
                    )}

                    {user?.email && (
                        <Navbar.Brand className="p-0">
                            <h6
                                style={{ color: "#FF3614" }}
                                className="name-style"
                            >
                                {user?.displayName?.split(" ")[0]}
                            </h6>
                        </Navbar.Brand>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

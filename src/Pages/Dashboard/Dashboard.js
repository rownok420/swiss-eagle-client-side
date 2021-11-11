import React, { useState } from "react";
import { Col, Container, Row, Offcanvas } from "react-bootstrap";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import CustomerReview from "../UserDashboard/CustomerReview/CustomerReview";
import MyOrders from "../UserDashboard/MyOrders/MyOrders";
import PayBill from "../UserDashboard/PayBill/PayBill";
import "./Dashboard.css";
import logo from "../../images/logo.png";
import MakeAdmin from "../AdminDashboard/MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../AdminDashboard/ManageProduct/ManageProduct";
import ManageAllOrders from "../AdminDashboard/ManageAllOrders/ManageAllOrders";

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let { path, url } = useRouteMatch();

    return (
        <div>
            <div>
                <div>
                    <div
                        className="d-none offCanvas-controller w-100 d-flex justify-content-between"
                        style={{ borderRadius: 0, textAlign: "left" }}
                        onClick={handleShow}
                    >
                        <i className="fas fa-3x fa-angle-double-right ms-3 text-dark"></i>
                        <img className="mb-3 ms-5 " src={logo} alt="" />
                    </div>
                </div>

                <Offcanvas
                    className="d-none handle-canvas w-50"
                    show={show}
                    onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="fs-1">
                            Dashboard
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="canvas-body">
                        <NavLink to="/home">Home</NavLink>
                        <br />
                        <NavLink to={`${url}`}>My Orders</NavLink>
                        <br />
                        <NavLink to={`${url}/customerReview`}>Review</NavLink>
                        <br />
                        <NavLink to={`${url}/payBill`}>Pay Bill</NavLink>
                        <br />
                        <NavLink to={`${url}/makeAdmin`}>Make Admin</NavLink>
                        <br />
                        <NavLink to={`${url}/addProduct`}>Add Product</NavLink>
                        <br />
                        <NavLink to={`${url}/manageProduct`}>
                            Manage All Products
                        </NavLink>
                        <br />
                        <NavLink to={`${url}/manageOrder`}>
                            Manage All Orders
                        </NavLink>
                    </Offcanvas.Body>
                </Offcanvas>
                <div>
                    <div className="logo-bg">
                        <img
                            style={{ height: "50px" }}
                            className="d-block mx-auto"
                            src={logo}
                            alt=""
                        />
                    </div>
                    <Container fluid>
                        <Row>
                            <Col className="my-col text-center pt-5" lg={3}>
                                <NavLink to="/home">Home</NavLink>
                                <br />
                                <NavLink to={`${url}`}>My Orders</NavLink>
                                <br />
                                <NavLink to={`${url}/customerReview`}>
                                    Review
                                </NavLink>
                                <br />
                                <NavLink to={`${url}/payBill`}>
                                    Pay Bill
                                </NavLink>
                                <hr />

                                <NavLink to={`${url}/makeAdmin`}>
                                    Make Admin
                                </NavLink>
                                <br />
                                <NavLink to={`${url}/addProduct`}>
                                    Add Product
                                </NavLink>
                                <br />
                                <NavLink to={`${url}/manageProduct`}>
                                    Manage Products
                                </NavLink>
                                <br />
                                <NavLink to={`${url}/manageOrder`}>
                                    Manage All Orders
                                </NavLink>
                            </Col>
                            <Col xs={12} lg={9}>
                                <Switch>
                                    <Route exact path={path}>
                                        <MyOrders />
                                    </Route>
                                    <Route path={`${path}/customerReview`}>
                                        <CustomerReview />
                                    </Route>
                                    <Route path={`${path}/payBill`}>
                                        <PayBill />
                                    </Route>
                                    <Route path={`${path}/makeAdmin`}>
                                        <MakeAdmin />
                                    </Route>
                                    <Route path={`${path}/addProduct`}>
                                        <AddProduct />
                                    </Route>
                                    <Route path={`${path}/manageProduct`}>
                                        <ManageProduct />
                                    </Route>
                                    <Route path={`${path}/manageOrder`}>
                                        <ManageAllOrders />
                                    </Route>
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

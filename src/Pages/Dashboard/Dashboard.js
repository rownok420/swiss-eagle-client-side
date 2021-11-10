import React, { useState } from "react";
import { Col, Container, Row, Button, Offcanvas } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch, NavLink } from "react-router-dom";
import CustomerReview from "../UserDashboard/CustomerReview/CustomerReview";
import MyOrders from "../UserDashboard/MyOrders/MyOrders";
import PayBill from "../UserDashboard/PayBill/PayBill";
import "./Dashboard.css";

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const activeStyle = {
        fontWeight: "bold",
        color: "#FF3614",
    };

    let { path, url } = useRouteMatch();

    return (
        <div>
            <Container>
                <Button
                    className="d-none offCanvas-controller"
                    variant="primary"
                    onClick={handleShow}
                >
                    <i className="fas fa-2x fa-angle-double-right"></i>
                </Button>

                <Offcanvas
                    className="d-none handle-canvas w-50"
                    show={show}
                    onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <NavLink activeStyle={activeStyle} to="/home">
                            Home
                        </NavLink>
                        <br />
                        <NavLink to={`${url}`}>My Orders</NavLink>
                        <br />
                        <NavLink to={`${url}/customerReview`}>Review</NavLink>
                        <br />
                        <NavLink to={`${url}/payBill`}>Pay Bill</NavLink>
                    </Offcanvas.Body>
                </Offcanvas>
                <Row>
                    <Col className="my-col" lg={3}>
                        <NavLink activeStyle={activeStyle} to="/home">
                            Home
                        </NavLink>
                        <br />
                        <NavLink to={`${url}`}>My Orders</NavLink>
                        <br />
                        <NavLink to={`${url}/customerReview`}>Review</NavLink>
                        <br />
                        <NavLink to={`${url}/payBill`}>Pay Bill</NavLink>
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
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;

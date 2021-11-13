import React, { useEffect, useState } from "react";
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
import useAuth from "../../Hooks/useAuth";
import Profile from "../UserDashboard/Profile/Profile";
import AdminRoute from "../Login/AdminRoute/AdminRoute";
import NotFound from "../Dashboard/NotFound/NotFound";
import UserRoute from "../Login/UserRoute/UserRoute";

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { logOut, admin } = useAuth();

    let { path, url } = useRouteMatch();

    useEffect(() => {
        document.title = "Swiss Eagle | DashBoard";
    }, []);

    const activeStyle = {
        fontWeight: "bold",
        color: "#00a3c8",
    };

    return (
        <div>
            <div>
                <div className="d-none offCanvas-controller ">
                    <div className=" d-flex justify-content-between align-items-center flex-bg px-3">
                        <button
                            className="border-0 bg-transparent"
                            style={{ borderRadius: 0, textAlign: "left" }}
                            onClick={handleShow}
                        >
                            <i
                                style={{ color: "#cbba9c" }}
                                className="fas fa-3x fa-bars"
                            ></i>
                        </button>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>

                {/* offCanvas menu  */}
                <Offcanvas
                    className="d-none handle-canvas w-75"
                    show={show}
                    onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="fs-2 hed-color">
                            Dashboard
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="canvas-body text-left">
                        {!admin && (
                            <>
                                <div
                                    onClick={handleClose}
                                    className="d-flex justify-content-start align-items-center"
                                >
                                    <i className="fas fa-shopping-basket me-2"></i>
                                    <NavLink activeStyle={activeStyle} to={`${url}/myOrder`}>
                                        My Orders
                                    </NavLink>
                                </div>
                                <br />
                                <div
                                    onClick={handleClose}
                                    className="d-flex justify-content-start align-items-center"
                                >
                                    <i className="fas fa-comment me-2"></i>
                                    <NavLink activeStyle={activeStyle} to={`${url}/customerReview`}>
                                        Review
                                    </NavLink>
                                </div>
                                <br />
                                <div
                                    onClick={handleClose}
                                    className="d-flex justify-content-start align-items-center"
                                >
                                    <i className="fas fa-shopping-cart me-2"></i>
                                    <NavLink activeStyle={activeStyle} to={`${url}/payBill`}>
                                        Pay Bill
                                    </NavLink>
                                </div>{" "}
                            </>
                        )}
                        {admin && (
                            <>
                                <div
                                    onClick={handleClose}
                                    className="d-flex justify-content-start align-items-center"
                                >
                                    <i className="fas fa-user me-2"></i>
                                    <NavLink activeStyle={activeStyle} to={`${url}/makeAdmin`}>
                                        Make Admin
                                    </NavLink>
                                </div>
                                <br />
                                <div
                                    onClick={handleClose}
                                    className="d-flex justify-content-start align-items-center"
                                >
                                    <i className="fas fa-plus me-2"></i>
                                    <NavLink activeStyle={activeStyle} to={`${url}/addProduct`}>
                                        Add Product
                                    </NavLink>
                                </div>
                                <br />
                                <div
                                    onClick={handleClose}
                                    className="d-flex justify-content-start align-items-center"
                                >
                                    <i className="fas fa-clock me-2"></i>
                                    <NavLink activeStyle={activeStyle} to={`${url}/manageProduct`}>
                                        Manage All Products
                                    </NavLink>
                                </div>
                                <br />
                                <div
                                    onClick={handleClose}
                                    className="d-flex justify-content-start align-items-center"
                                >
                                    <i className="fas fa-cannabis me-2"></i>
                                    <NavLink activeStyle={activeStyle} to={`${url}/manageOrder`}>
                                        Manage All Orders
                                    </NavLink>
                                </div>
                            </>
                        )}
                        <hr />
                        <div
                            onClick={handleClose}
                            className="d-flex justify-content-start align-items-center"
                        >
                            <i className="fas fa-user-circle me-2"></i>
                            <NavLink to={`${url}`}>Profile</NavLink>
                        </div>
                        <br />
                        <div className="d-flex justify-content-start align-items-center">
                            <i className="fas fa-home me-2"></i>
                            <NavLink to="/home">Back to home</NavLink>
                        </div>
                        <br />
                        <div className="d-flex justify-content-start align-items-center">
                            <i className="fas fa-sign-out-alt me-2"></i>
                            <NavLink onClick={logOut} to="/login">
                                Logout
                            </NavLink>
                        </div>
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
                            <Col className="my-col text-left pt-5" lg={2}>
                                {!admin && (
                                    <>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <i className="fas fa-shopping-basket me-2"></i>
                                            <NavLink activeStyle={activeStyle} to={`${url}/myOrder`}>
                                                My Orders
                                            </NavLink>
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-start align-items-center">
                                            <i className="fas fa-comment me-2"></i>
                                            <NavLink
                                                activeStyle={activeStyle}
                                                to={`${url}/customerReview`}
                                            >
                                                Review
                                            </NavLink>
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-start align-items-center">
                                            <i className="fas fa-shopping-cart me-2"></i>
                                            <NavLink activeStyle={activeStyle} to={`${url}/payBill`}>
                                                Pay Bill
                                            </NavLink>
                                        </div>{" "}
                                    </>
                                )}
                                {admin && (
                                    <>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <i className="fas fa-user me-2"></i>
                                            <NavLink activeStyle={activeStyle} to={`${url}/makeAdmin`}>
                                                Make Admin
                                            </NavLink>
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-start align-items-center">
                                            <i className="fas fa-plus me-2"></i>
                                            <NavLink activeStyle={activeStyle} to={`${url}/addProduct`}>
                                                Add Product
                                            </NavLink>
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-start align-items-center">
                                            <i className="fas fa-clock me-2"></i>
                                            <NavLink
                                                activeStyle={activeStyle}
                                                to={`${url}/manageProduct`}
                                            >
                                                Manage All Products
                                            </NavLink>
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-start align-items-center">
                                            <i className="fas fa-cannabis me-2"></i>
                                            <NavLink activeStyle={activeStyle} to={`${url}/manageOrder`}>
                                                Manage All Orders
                                            </NavLink>
                                        </div>
                                    </>
                                )}
                                <hr />
                                <div className="d-flex justify-content-start align-items-center">
                                    <i className="fas fa-user-circle me-2"></i>
                                    <NavLink to={`${url}`}>Profile</NavLink>
                                </div>
                                <br />
                                <div className="d-flex justify-content-start align-items-center">
                                    <i className="fas fa-home me-2"></i>
                                    <NavLink to="/home">Back to home</NavLink>
                                </div>
                                <br />
                                <div className="d-flex justify-content-start align-items-center">
                                    <i className="fas fa-sign-out-alt me-2"></i>
                                    <NavLink onClick={logOut} to="/login">
                                        Logout
                                    </NavLink>
                                </div>
                            </Col>
                            <Col
                                xs={12}
                                lg={10}
                                style={{
                                    backgroundColor: "#f4f7fc",
                                    minHeight: "100vh",
                                }}
                            >
                                <Switch>
                                    <Route exact path={path}>
                                        <Profile />
                                    </Route>
                                    <UserRoute path={`${path}/myOrder`}>
                                        <MyOrders />
                                    </UserRoute>
                                    <UserRoute path={`${path}/customerReview`}>
                                        <CustomerReview />
                                    </UserRoute>
                                    <UserRoute path={`${path}/payBill`}>
                                        <PayBill />
                                    </UserRoute>
                                    <AdminRoute path={`${path}/makeAdmin`}>
                                        <MakeAdmin />
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/addProduct`}>
                                        <AddProduct />
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageProduct`}>
                                        <ManageProduct />
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageOrder`}>
                                        <ManageAllOrders />
                                    </AdminRoute>
                                    <Route exact path="*">
                                        <NotFound />
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

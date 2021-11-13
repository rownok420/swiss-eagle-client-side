import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import userImg from '../../../images/user.png'
import "./Profile.css";

const Profile = () => {
    const { user, logOut } = useAuth();

    return (
        <div className=" my-5">
            <div>
                <h1 className="hed-color text-center">Profile</h1>
                <hr className="dotted-hr mb-5" />
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card className="h-100 my-3 h-100 card-style card-hover-style profile-card  pt-4 w-50 mx-auto">
                                <div className="card-img-container">
                                    <Card.Img
                                        style={{
                                            height: "130px",
                                            width: "130px",
                                            borderRadius: "100%",
                                        }}
                                        className="card-img-style d-block mx-auto mb-3 mt-4"
                                        variant="top"
                                        src={user?.photoURL ? user.photoURL: userImg}
                                    />
                                </div>
                                <Card.Body className="text-center">
                                    <Card.Title className="fs-3">
                                        {user?.displayName}
                                    </Card.Title>
                                    <h6 className="text-muted">{user?.email}</h6>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <button onClick={logOut} className="home-button mb-3">Logout</button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Profile;

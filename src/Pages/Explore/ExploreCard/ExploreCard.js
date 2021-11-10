import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";

const ExploreCard = () => {
    const [products] = useProducts();

    return (
        <div className="mb-5 top-margin">
            <Container>
                <div className="text-center">
                    <h1 className="hed-color mb-3">
                        Our Most Popular Products
                    </h1>
                    <p>
                        Life is made up of two things Time and Love.Time is free
                        but it is priceless. You can’t own it <br /> but you can
                        use it. You can’t keep it but you can spend it.
                    </p>
                </div>
                <div className="mt-5">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {products.map((product) => (
                            <Col key={product._id}>
                                <Card className="h-100 card-style card-hover-style">
                                    <div className="card-img-container">
                                        <Card.Img
                                            className="card-img-style"
                                            variant="top"
                                            src={product?.image}
                                        />
                                    </div>
                                    <Card.Body>
                                        <div className="my-3 d-flex justify-content-between align-items-center">
                                            <Card.Title>
                                                {product?.name?.slice(0, 26)}
                                            </Card.Title>
                                            <p
                                                className="fw-bold"
                                                style={{ color: "#ff7c5b" }}
                                            >
                                                ${product?.price}
                                            </p>
                                        </div>
                                        <Card.Text>
                                            {product?.description?.slice(
                                                0,
                                                100
                                            )}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <Link to="/placeOrder">
                                            <button className="home-button mb-2">
                                                Place Order
                                            </button>
                                        </Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ExploreCard;

{
    /* <Link to={`/placeorder/${_id}`}></Link> */
}

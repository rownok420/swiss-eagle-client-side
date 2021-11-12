import React, { useEffect, useState } from "react";
import { Card, Container} from "react-bootstrap";
import "./Review.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import userImg from '../../../images/user.png'
import Rating from "../../Share/Rating/Rating";


const Review = () => {
    const [ratings, setRatings] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/getReview")
            .then((res) => res.json())
            .then((data) => setRatings(data));
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="mb-5 top-margin">
            <Container>
                <div className="text-center hed-color">
                    <h6>MODERN & BEAUTIFUL</h6>
                    <h1 className="mb-5">Customers Review</h1>
                </div>
                <section
                    className="my-5"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <div className="container">
                        <Slider {...settings}>
                            {ratings?.map((rating) => (
                                <Card key={rating._id}  className="h-100 my-3 card-style card-hover-style">
                                    <div className="card-img-container">
                                        <Card.Img
                                            style={{
                                                height: "100px",
                                                width: "100px",
                                                borderRadius: "100%",
                                            }}
                                            className="card-img-style mx-auto my-3"
                                            variant="top"
                                            src={rating.image ? rating.image : userImg}
                                        />
                                    </div>
                                    <Card.Body className="text-center">
                                        <Card.Title className="fs-3">
                                            {rating.name?.slice(0, 26)}
                                        </Card.Title>
                                        <h5>{rating.address}</h5>
                                        <Card.Text className="fs-5">
                                            {rating.description?.slice(0, 100)}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-center my-3">
                                        <Rating rating={rating.rating} />
                                    </Card.Footer>
                                </Card>
                            ))}
                        </Slider>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Review;
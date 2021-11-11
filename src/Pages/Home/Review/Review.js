import React from "react";
import { Container } from "react-bootstrap";
import "./Review.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useProducts from "../../../Hooks/useProducts";

const Review = () => {
    const [products] = useProducts();

    var settings = {
        dots: false,
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
                            {products?.map((product) => (
                                <h1>{product.name}</h1>
                            ))}
                        </Slider>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Review;




// import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Review from '../Review';
// import UseReview from '../../../../Hooks/UseReview';

// const Reviews = () => {
//     const [review] = UseReview();
//     var settings = {
//         dots: false,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         speed: 3000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };
//     return (
//         <section className="my-5" data-aos="fade-up"
//             data-aos-duration="2000">
//             <div className="container">
//                 <h2 className="text-uppercase text-center abril-font mb-4">Client Review</h2>
//                 <Slider {...settings}>
//                     {
//                         review?.map(review => <Review
//                             key={review.name}
//                             review={review}
//                         ></Review>)
//                     }
//                 </Slider>
//             </div>
//         </section>
//     );
// };

// export default Reviews;

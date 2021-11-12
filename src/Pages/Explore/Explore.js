import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Footer from "../Share/Footer/Footer";
import Header from "../Share/Header/Header";
import Subscribe from "../Share/Subscribe/Subscribe";
import "./Explore.css";
import ExploreCard from "./ExploreCard/ExploreCard";

const Explore = () => {
    const [products] = useProducts();

    if (products.length === 0) {
        return (
            <div
                style={{ minHeight: "100vh" }}
                className="d-flex my-5 justify-content-center align-items-center"
            >
                <Spinner animation="border" variant="info" />
            </div>
        );
    }
    return (
        <div>
            <Header />
            <div className="text-center">
                <div className="background">
                    <h1 className="dep-heading">Explore Our Products</h1>
                    <p className="text-white">
                        Exploring means learning. Bring new experiences from
                        each journey. Meet different cultures, traditions and
                        landscapes. <br /> Choose your next destination and
                        start your trip.
                    </p>
                    <Link to="/home">
                        <button className="home-button">
                            <i className="fas fa-backward pe-2"></i> Back home
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <ExploreCard />
            </div>
            <div>
                <Subscribe />
            </div>
            <Footer />
        </div>
    );
};

export default Explore;

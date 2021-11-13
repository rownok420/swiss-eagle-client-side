import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import ScrollToTop from '../../Share/ScrollToTop/ScrollToTop';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Contact from '../Contact/Contact';
import Premier from '../Premier/Premier';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    const [products] = useProducts();
    
    useEffect(() => {
        document.title = 'Swiss Eagle | Your Trusted Partner'
    }, []);
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
            <ScrollToTop />
            <Header />
            <Banner />
            <Premier />
            <Brand />
            <Products />
            <Review />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
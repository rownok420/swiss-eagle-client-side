import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Contact from '../Contact/Contact';
import Premier from '../Premier/Premier';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
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
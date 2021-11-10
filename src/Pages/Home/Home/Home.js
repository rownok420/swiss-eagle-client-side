import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Contact from '../Contact/Contact';
import Premier from '../Premier/Premier';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner />
            <Premier />
            <Brand />
            <Products />
            <Review />
            <Contact />
        </div>
    );
};

export default Home;
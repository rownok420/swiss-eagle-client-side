import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Premier from '../Premier/Premier';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <Premier />
            <Brand />
            <Products />
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../Share/Subscribe/Subscribe';
import './Explore.css'
import ExploreCard from './ExploreCard/ExploreCard';

const Explore = () => {
    return (
        <div>
            <div className="text-center">
                <div className="background">
                    <h1 className="dep-heading">Explore Our Products</h1>
                    <p className='text-white'>
                        Exploring means learning. Bring new experiences from
                        each journey. Meet different cultures, traditions and
                        landscapes. <br /> Choose your next destination and start your
                        trip.
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
        </div>
    );
};

export default Explore;
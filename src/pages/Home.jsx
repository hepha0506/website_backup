import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Products from '../components/Products';
import Trust from '../components/Trust';

const Home = () => {
    return (
        <main>
            <Hero />
            <Stats />
            <Products />
            <Trust />
        </main>
    );
};

export default Home;

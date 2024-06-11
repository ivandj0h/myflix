import React from 'react';
import Hero from '@/components/hero/Hero';
import PopularMovies from '../../src/components/popular/PopularMovies'

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <PopularMovies />
        </>
    );
};

export default Home;

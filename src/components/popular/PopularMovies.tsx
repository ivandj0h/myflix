"use client"

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import axios from 'axios';
import styles from './popularMovies.module.css';
import TabMovies from "@/components/tabmovies/TabMovies";
import Footer from "@/components/footer/Footer";
import MovieModal from '@/components/modal/MovieModal';
import {constructTMDBUrl} from '@/app/constants/EndpointTMDB';
import {Movie} from "@/app/interfaces/globalInterfaces";

const PopularMovies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY || '';
        const url = constructTMDBUrl(apiKey);

        axios.get(url)
            .then(response => {
                setMovies(response.data.results);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                setIsLoading(false);
            });
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie);
    };

    const closeModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className={styles.popularMoviesContainer}>
            <h2 className={styles.sectionTitle}>Popular Movies</h2>
            <div className={styles.sliderContainer}>
                <button className={styles.navButton} onClick={() => scroll('left')}>{"<"}</button>
                <div className={styles.moviesGrid} ref={scrollRef}>
                    {movies.map(movie => (
                        <div key={movie.id} className={styles.movieCard} onClick={() => handleMovieClick(movie)}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className={styles.movieImage}
                                width={200}
                                height={300}
                            />
                            <h3 className={styles.movieTitle}>{movie.title}</h3>
                        </div>
                    ))}
                </div>
                <button className={styles.navButton} onClick={() => scroll('right')}>{">"}</button>
            </div>
            <TabMovies />
            <Footer />
            {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}
        </div>
    );
};

export default PopularMovies;

"use client"

import React, { useRef, useEffect, useState } from 'react';
import styles from './popularMovies.module.css';
import TabMovies from "@/components/tabmovies/TabMovies";
import Footer from "@/components/footer/Footer";
import { constructTMDBUrl } from '@/app/constants/EndpointTMDB';
import {Movie} from "@/app/interfaces/globalInterfaces";



const PopularMovies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
                const url = constructTMDBUrl(apiKey!);
                const response = await fetch(url);
                const data = await response.json();
                const formattedMovies = data.results.map((movie: any) => ({
                    id: movie.id,
                    title: movie.title,
                    imageUrl: `https://image.tmdb.org/t/p/w1280${movie.poster_path}`
                }));
                setMovies(formattedMovies);
                console.log(formattedMovies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.popularMoviesContainer}>
            <h2 className={styles.sectionTitle}>Popular Movies</h2>
            <div className={styles.sliderContainer}>
                <button className={styles.navButton} onClick={() => scroll('left')}>{"<"}</button>
                <div className={styles.moviesGrid} ref={scrollRef}>
                    {movies.map(movie => (
                        <div key={movie.id} className={styles.movieCard}>
                            <img src={movie.imageUrl} alt={movie.title} className={styles.movieImage} />
                            <h3 className={styles.movieTitle}>{movie.title}</h3>
                        </div>
                    ))}
                </div>
                <button className={styles.navButton} onClick={() => scroll('right')}>{">"}</button>
            </div>
            <TabMovies />
            <Footer />
        </div>
    );
};

export default PopularMovies;

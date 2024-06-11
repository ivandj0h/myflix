"use client"


import React, { useRef } from 'react';
import styles from './popularMovies.module.css';
import TabMovies from "@/components/tabmovies/TabMovies";

const PopularMovies: React.FC = () => {
    const movies = [
        { id: 1, title: 'Battle Over Britain (2023)', imageUrl: 'https://image.tmdb.org/t/p/w1280/8htJ7keZTwa08aC9OKyiqaq1cNJ.jpg' },
        { id: 2, title: 'The Great Ruler', imageUrl: 'https://image.tmdb.org/t/p/w1280/vSp1OLAvOM40Yt32J3pYDfXr69c.jpg' },
        { id: 3, title: 'Kaiyu No. 8', imageUrl: 'https://image.tmdb.org/t/p/w1280/PDe8WZHxH6XxM6Buxoo99aQrgw.jpg' },
        { id: 4, title: 'Mushoku Tensei 2', imageUrl: 'https://image.tmdb.org/t/p/w1280/gLKOYIMyKlUHW0SVdskhgf9C0yy.jpg' },
        { id: 5, title: 'Black Butler', imageUrl: 'https://image.tmdb.org/t/p/w1280/7N8os3UNezyfyY8FowkLbSzHDqW.jpg' },
        { id: 7, title: 'Civil War (2024)', imageUrl: 'https://image.tmdb.org/t/p/w1280/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg' },
        { id: 8, title: 'Godzilla x Kong: The New Empire (2024)', imageUrl: 'https://image.tmdb.org/t/p/w1280/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg' },
        { id: 9, title: 'Chappie (2015)', imageUrl: 'https://image.tmdb.org/t/p/w1280/hpnuXlKKWznTgbheGe4iQXzkuwJ.jpg' },
        { id: 10, title: 'Movie Title 10', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 11, title: 'Movie Title 11', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 12, title: 'Movie Title 12', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 13, title: 'Movie Title 13', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 14, title: 'Movie Title 14', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 15, title: 'Movie Title 15', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 16, title: 'Movie Title 16', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 17, title: 'Movie Title 17', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 18, title: 'Movie Title 18', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 19, title: 'Movie Title 19', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 20, title: 'Movie Title 20', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);

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
        </div>
    );
};

export default PopularMovies;

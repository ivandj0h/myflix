"use client"


import React, { useRef } from 'react';
import styles from './popularMovies.module.css';
import TabMovies from "@/components/tabmovies/TabMovies";

const PopularMovies: React.FC = () => {
    const movies = [
        { id: 1, title: 'Vina: Sebelum 7 Hari (2024)', imageUrl: 'https://image.tmdb.org/t/p/w1280/j1xUlKVa8rS1c2mi0cZsjUSJ6G4.jpg' },
        { id: 2, title: 'The Amazing Spider-Man (2012)', imageUrl: 'https://image.tmdb.org/t/p/w1280/BgcvtsVWLQfjHD6Dr3YYgeSLYk.jpg' },
        { id: 3, title: 'Kaiyu No. 8', imageUrl: 'https://image.tmdb.org/t/p/w1280/PDe8WZHxH6XxM6Buxoo99aQrgw.jpg' },
        { id: 4, title: 'Mushoku Tensei 2', imageUrl: 'https://image.tmdb.org/t/p/w1280/gLKOYIMyKlUHW0SVdskhgf9C0yy.jpg' },
        { id: 5, title: 'Black Butler', imageUrl: 'https://image.tmdb.org/t/p/w1280/7N8os3UNezyfyY8FowkLbSzHDqW.jpg' },
        { id: 7, title: 'Civil War (2024)', imageUrl: 'https://image.tmdb.org/t/p/w1280/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg' },
        { id: 8, title: 'Godzilla x Kong: The New Empire (2024)', imageUrl: 'https://image.tmdb.org/t/p/w1280/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg' },
        { id: 9, title: 'Chappie (2015)', imageUrl: 'https://image.tmdb.org/t/p/w1280/hpnuXlKKWznTgbheGe4iQXzkuwJ.jpg' },
        { id: 10, title: 'Fast & Furious Presents: Hobbs & Shaw (2019)', imageUrl: 'https://image.tmdb.org/t/p/w1280/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg' },
        { id: 11, title: 'The Great Ruler', imageUrl: 'https://image.tmdb.org/t/p/w1280/vSp1OLAvOM40Yt32J3pYDfXr69c.jpg' },
        { id: 12, title: 'The Amazing Spider-Man 2', imageUrl: 'https://image.tmdb.org/t/p/w1280/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg' },
        { id: 13, title: 'Immaculate', imageUrl: 'https://image.tmdb.org/t/p/w1280/fdZpvODTX5wwkD0ikZNaClE4AoW.jpg' },
        { id: 14, title: 'Ordinary Angels', imageUrl: 'https://image.tmdb.org/t/p/w1280/wdi9kEU4W2UeBTtdqOPZISGMtDR.jpg' },
        { id: 14, title: 'Land of Bad', imageUrl: 'https://image.tmdb.org/t/p/w1280/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg' },
        { id: 15, title: 'Force of Nature', imageUrl: 'https://image.tmdb.org/t/p/w1280/sw4M0jLT04FM1p3C2XQ3il50wgV.jpg' },
        { id: 16, title: 'Battle Over Britain (2023)', imageUrl: 'https://image.tmdb.org/t/p/w1280/8htJ7keZTwa08aC9OKyiqaq1cNJ.jpg' },
        { id: 17, title: 'Winnie-the-Pooh: Blood and Honey 2', imageUrl: 'https://image.tmdb.org/t/p/w1280/2sADrLwMQof6yYmrJRSa04tFZuS.jpg' },
        { id: 18, title: 'The Iron Claw', imageUrl: 'https://image.tmdb.org/t/p/w1280/nfs7DCYhgrEIgxKYbITHTzKsggf.jpg' },
        { id: 19, title: 'Jugaremos en el bosque', imageUrl: 'https://image.tmdb.org/t/p/w1280/eBSl9nGymidAyEBdJGADnnm7JKt.jpg' },
        { id: 20, title: 'City of God', imageUrl: 'https://image.tmdb.org/t/p/w1280/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg' },
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

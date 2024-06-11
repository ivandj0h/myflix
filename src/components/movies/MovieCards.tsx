import React from 'react';
import styles from './movie-cards.module.css';
import {Movie, MovieCardsProps} from "@/app/interfaces/globalInterfaces";

const mockMovies: { [key: string]: Movie[] } = {
    'Now Playing': [
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
    ],
    'Upcoming Movies': [
        { id: 11, title: 'Upcoming 1', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 12, title: 'Upcoming 2', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
    ],
    'Top Rated Movies': [
        { id: 21, title: 'Top Rated 1', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
        { id: 22, title: 'Top Rated 2', imageUrl: 'https://image.tmdb.org/t/p/w500/path-to-image.jpg' },
    ],
};

const MovieCards: React.FC<MovieCardsProps> = ({ category }) => {
    const movies: Movie[] = mockMovies[category] || [];

    return (
        <>
            {movies.map((movie: Movie) => (
                <div key={movie.id} className={styles.movieCard}>
                    <img src={movie.imageUrl} alt={movie.title} className={styles.movieImage} />
                    <h3 className={styles.movieTitle}>{movie.title}</h3>
                </div>
            ))}
        </>
    );
};

export default MovieCards;

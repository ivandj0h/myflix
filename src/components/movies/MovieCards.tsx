import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './movie-cards.module.css';
import { Movie, MovieCardsProps } from "@/app/interfaces/globalInterfaces";
import {constructsTMDBUrl} from '@/app/constants/EndpointTMDB';
import MovieModal from "@/components/modal/MovieModal";

const MovieCards: React.FC<MovieCardsProps> = ({ category }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY || '';
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const url = constructsTMDBUrl(apiKey, category);

            try {
                const response = await axios.get(url);
                const fetchedMovies = response.data.results.map((movie: any) => ({
                    id: movie.id,
                    title: movie.title,
                    imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    poster_path: movie.poster_path,
                    overview: movie.overview
                }));
                setMovies(fetchedMovies);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, [category, apiKey]);

    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie);
    };

    const closeModal = () => {
        setSelectedMovie(null);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {movies.map((movie: Movie) => (
                <div key={movie.id} className={styles.movieCard} onClick={() => handleMovieClick(movie)}>
                    <img src={movie.imageUrl} alt={movie.title} className={styles.movieImage} />
                    <h3 className={styles.movieTitle}>{movie.title}</h3>
                </div>
            ))}
            {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}
        </>
    );
};

export default MovieCards;

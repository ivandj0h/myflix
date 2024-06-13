"use client"

import React, {useState, FormEvent, useEffect} from 'react';
import Footer from "@/components/footer/Footer";
import styles from './search-page.module.css';
import auth from "@/components/utils/auth";
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';
import { generateTMDBSearchUrl } from '../../constants/EndpointTMDB'
import MovieModal from "@/components/modal/MovieModal";
import {Movie} from "@/app/interfaces/globalInterfaces";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || '';

const SearchPage: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [suggestions, setSuggestions] = useState<Movie[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    useEffect(() => {
        if (query.length > 2) {
            fetchSuggestions(query);
        } else {
            setSuggestions([]);
        }
    }, [query]);

    const fetchSuggestions = async (searchTerm: string) => {
        try {
            const url = generateTMDBSearchUrl(API_KEY, searchTerm);
            const response = await fetch(url);
            const data = await response.json();
            if (data.results) {
                setSuggestions(data.results);
            }
        } catch (error) {
            console.error('Failed to fetch suggestions:', error);
        }
    };

    const searchMovies = async (searchTerm: string) => {
        setErrorMessage('');
        try {
            const url = generateTMDBSearchUrl(API_KEY, searchTerm);
            const response = await fetch(url);
            const data = await response.json();
            if (data.results) {
                setMovies(data.results);
                setQuery(''); // Kosongkan kotak teks setelah pencarian
                setSuggestions([]); // Kosongkan suggestions setelah pencarian
            } else {
                setErrorMessage('No results found.');
            }
        } catch (error) {
            setErrorMessage('Failed to fetch data.');
        }
    };

    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie);
    };

    const closeModal = () => {
        setSelectedMovie(null);
    };

    const handleSuggestionClick = (movie: Movie) => {
        setQuery(movie.title);
        searchMovies(movie.title);
        setSuggestions([]); // Hapus kotak auto-suggestion
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        searchMovies(query);
    };

    return (
        <div className={styles.pageContainer}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className={styles.searchInput}
                    autoComplete="off"
                />
                {suggestions.length > 0 && (
                    <ul className={styles.suggestionsList}>
                        {suggestions.map((movie) => (
                            <li key={movie.id} onClick={() => handleSuggestionClick(movie)} className={styles.suggestionItem}>
                                {movie.title}
                            </li>
                        ))}
                    </ul>
                )}
                <button type="submit" className={styles.searchButton}>
                    <FaSearch className={styles.searchIcon}/>
                    Search
                </button>
            </form>
            <div className={`mt-4 p-4 ${styles.resultsContainer}`}>
                {errorMessage ? (
                    <div className="max-w-md mx-auto bg-pink-100 text-red-500 p-4 rounded border-2 border-red-500 text-center text-lg">
                        {errorMessage}
                    </div>
                ) : (
                    <div className={styles.gridContainer}>
                        {movies.filter(movie => movie.poster_path).map((movie) => (
                            <div key={movie.id} className={styles.movieCard} onClick={() => handleMovieClick(movie)}>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className={styles.movieImage}
                                    width={300}
                                    height={450}
                                />
                                <h3 className={styles.movieTitle}>{movie.title}</h3>
                            </div>
                        ))}
                        {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default auth(SearchPage);

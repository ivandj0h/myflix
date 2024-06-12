"use client"

import React, { useState, useEffect } from 'react';
import auth from "@/components/utils/auth";
import { Movie } from "@/app/interfaces/globalInterfaces";
import styles from './favourite-page.module.css';
import { useTheme } from '@/app/context/ThemeContext';
import Footer from "@/components/footer/Footer";
import {CiCircleRemove} from "react-icons/ci";
import Image from "next/image";

const FavouritePage: React.FC = () => {
    const { isDarkTheme } = useTheme();
    const [favourites, setFavourites] = useState<Movie[]>([]);
    const [visibleFavourites, setVisibleFavourites] = useState<Movie[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [showLoadMore, setShowLoadMore] = useState<boolean>(false);

    useEffect(() => {
        const storedFavourites = localStorage.getItem('my_favourites');
        if (storedFavourites) {
            const parsedFavourites: Movie[] = JSON.parse(storedFavourites);
            if (parsedFavourites.length > 0) {
                setFavourites(parsedFavourites);
                setVisibleFavourites(parsedFavourites.slice(0, 12));
                setShowLoadMore(parsedFavourites.length > 12);
            } else {
                setErrorMessage('Favourite lists is empty');
            }
        } else {
            setErrorMessage('Favourite lists is empty');
        }
    }, []);

    const handleLoadMore = () => {
        const currentLength = visibleFavourites.length;
        const newVisible = favourites.slice(0, currentLength + 8);
        setVisibleFavourites(newVisible);
        setShowLoadMore(newVisible.length < favourites.length);
    };

    const handleRemoveFavourite = (id: number) => {
        const updatedFavourites = favourites.filter(movie => movie.id !== id);
        setFavourites(updatedFavourites);
        setVisibleFavourites(updatedFavourites.slice(0, visibleFavourites.length));
        localStorage.setItem('my_favourites', JSON.stringify(updatedFavourites));
        if (updatedFavourites.length <= 8) setShowLoadMore(false);
    };

    return (
        <>
            <div className={`mt-400 p-4 ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'} ${styles.favouritesContainer}`}>
                {errorMessage ? (
                    <div
                        className="max-w-md mx-auto bg-pink-100 text-red-500 p-4 rounded border-2 border-red-500 text-center text-lg">
                        {errorMessage}
                    </div>
                ) : (
                    <>
                        <div className={styles.gridContainer}>
                            {visibleFavourites.map((movie) => (
                                <div key={movie.id} className={styles.card}>
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className={styles.cardImage}
                                        width={300}
                                        height={300}
                                    />
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardTitle}>{movie.title}</h3>
                                        <p className={styles.cardDescription}>{movie.overview}</p>
                                        <button onClick={() => handleRemoveFavourite(movie.id)}
                                                className="mt-2 p-2 bg-red-800 text-white rounded hover:bg-red-900 flex items-center justify-center">
                                            <CiCircleRemove className="mr-2"/>
                                            Remove from Favourite
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {showLoadMore && (
                            <button className="mt-4 p-2 bg-red-500 text-white rounded" onClick={handleLoadMore}>
                                Load more...
                            </button>
                        )}
                    </>
                )}
            </div>
            <Footer/>
        </>
    );
}

export default auth(FavouritePage);

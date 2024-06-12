import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './movie-modal.module.css';
import { Movie, MovieModalProps } from '@/app/interfaces/globalInterfaces';
import { useTheme } from '@/app/context/ThemeContext';
import { CiCirclePlus, CiCircleRemove } from 'react-icons/ci';
import LoadingSpinner from "@/components/utils/LoadingSpinner";
import {genresMap} from "@/components/utils/metadata";


const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
    const { isDarkTheme } = useTheme();
    const [isFavourite, setIsFavourite] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(true);

    useEffect(() => {
        if (movie) {
            const favourites = JSON.parse(localStorage.getItem('my_favourites') || '[]');
            const isFav = favourites.some((fav: Movie) => fav.id === movie.id);
            setIsFavourite(isFav);
        }
    }, [movie]);

    const handleFavouriteClick = () => {
        if (movie) {
            const favourites = JSON.parse(localStorage.getItem('my_favourites') || '[]');

            if (isFavourite) {
                const updatedFavourites = favourites.filter((fav: Movie) => fav.id !== movie.id);
                localStorage.setItem('my_favourites', JSON.stringify(updatedFavourites));
                setIsFavourite(false);
            } else {
                favourites.push(movie);
                localStorage.setItem('my_favourites', JSON.stringify(favourites));
                setIsFavourite(true);
            }
        }
    };

    const handleImageLoad = () => {
        setIsImageLoading(false); // Set loading to false when image is loaded
    };

    if (!movie) {
        return null;
    }

    const genreNames = movie.genre_ids?.map((id) => genresMap[id]).join(', ') || 'Unknown';

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <div className={styles.modalLeft}>
                    {isImageLoading && <LoadingSpinner />} {/* Show spinner while image is loading */}
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.original_title}
                        width={500}
                        height={750}
                        className={styles.movieImage}
                        onLoadingComplete={handleImageLoad} // Event when image is loaded
                    />
                </div>
                <div className={isDarkTheme ? styles.modalRightDark : styles.modalRightLight}>
                    <h2 className={styles.modalTitle}>{movie.original_title}</h2>
                    <p>{movie.overview}</p>
                    <div className={styles.additionalInfo}>
                        <p><strong>Genres:</strong> {genreNames}</p>
                        <p><strong>Release date:</strong> {movie.release_date}</p>
                        <p><strong>Average vote:</strong> {movie.vote_average}</p>
                        <p><strong>Original language:</strong> {movie.original_language}</p>
                        <p><strong>Age classification:</strong> Suitable for all ages</p>
                    </div>
                    <div className={styles.favouriteButtonContainer}>
                        <button onClick={handleFavouriteClick} className={styles.favouriteButton}>
                            {isFavourite ? (
                                <>
                                    <CiCircleRemove style={{ marginRight: '8px' }} />
                                    Remove from Favourite
                                </>
                            ) : (
                                <>
                                    <CiCirclePlus style={{ marginRight: '8px' }} />
                                    Add to Favourite
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;


// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import styles from './movie-modal.module.css';
// import {Movie, MovieModalProps} from '@/app/interfaces/globalInterfaces';
// import { useTheme } from '@/app/context/ThemeContext';
// import { CiCirclePlus, CiCircleRemove } from 'react-icons/ci';
// import LoadingSpinner from "@/components/utils/LoadingSpinner";
//
//
// const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
//     const { isDarkTheme } = useTheme();
//     const [isFavourite, setIsFavourite] = useState(false);
//     const [isImageLoading, setIsImageLoading] = useState(true);
//
//     useEffect(() => {
//         if (movie) {
//             const favourites = JSON.parse(localStorage.getItem('my_favourites') || '[]');
//             const isFav = favourites.some((fav: Movie) => fav.id === movie.id);
//             setIsFavourite(isFav);
//         }
//     }, [movie]);
//
//     const handleFavouriteClick = () => {
//         if (movie) {
//             const favourites = JSON.parse(localStorage.getItem('my_favourites') || '[]');
//
//             if (isFavourite) {
//                 const updatedFavourites = favourites.filter((fav: Movie) => fav.id !== movie.id);
//                 localStorage.setItem('my_favourites', JSON.stringify(updatedFavourites));
//                 setIsFavourite(false);
//             } else {
//                 favourites.push(movie);
//                 localStorage.setItem('my_favourites', JSON.stringify(favourites));
//                 setIsFavourite(true);
//             }
//         }
//     };
//
//     const handleImageLoad = () => {
//         setIsImageLoading(false); // Set loading to false when image is loaded
//     };
//
//     if (!movie) {
//         return null;
//     }
//
//     return (
//         <div className={styles.modalOverlay}>
//             <div className={styles.modalContent}>
//                 <button className={styles.closeButton} onClick={onClose}>×</button>
//                 <div className={styles.modalLeft}>
//                     {isImageLoading && <LoadingSpinner/>} {/* Show spinner while image is loading */}
//                     <Image
//                         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                         alt={movie.original_title}
//                         width={500}
//                         height={750}
//                         className={styles.movieImage}
//                         onLoadingComplete={handleImageLoad} // Event when image is loaded
//                     />
//                 </div>
//                 <div className={isDarkTheme ? styles.modalRightDark : styles.modalRightLight}>
//                     <h2 className={styles.modalTitle}>{movie.original_title}</h2>
//                     <p>{movie.overview}</p>
//                     <div className={styles.additionalInfo}>
//                         <p><strong>Genres:</strong> {movie?.genre_ids.join(', ')}</p>
//                         <p><strong>Release date:</strong> {movie.release_date}</p>
//                         <p><strong>Average vote:</strong> {movie.vote_average}</p>
//                         <p><strong>Original language:</strong> {movie.original_language}</p>
//                         <p><strong>Age classification:</strong> Suitable for all ages</p>
//                     </div>
//                     <div className={styles.favouriteButtonContainer}>
//                         <button onClick={handleFavouriteClick} className={styles.favouriteButton}>
//                             {isFavourite ? (
//                                 <>
//                                     <CiCircleRemove style={{marginRight: '8px'}}/>
//                                     Remove from Favourite
//                                 </>
//                             ) : (
//                                 <>
//                                     <CiCirclePlus style={{marginRight: '8px'}}/>
//                                     Add to Favourite
//                                 </>
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default MovieModal;

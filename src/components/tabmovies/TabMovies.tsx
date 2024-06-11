import React, { useState } from 'react';
import styles from './tab-movies.module.css';
import MovieCards from '@/components/movies/MovieCards';

const categories = ['Now Playing', 'Upcoming Movies', 'Top Rated Movies'];

const TabMovies: React.FC = () => {
    const [category, setCategory] = useState<string>('Now Playing');
    const [loading, setLoading] = useState<boolean>(false);

    const handleTabClick = (newCategory: string) => {
        setLoading(true);
        setTimeout(() => {
            setCategory(newCategory);
            setLoading(false);
        }, 2000);
    };

    return (
        <div>
            <div className={styles.tabContainer}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.tabButton} ${category === cat ? styles.active : ''}`}
                        onClick={() => handleTabClick(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            {loading && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.spinner}></div>
                    </div>
                </div>
            )}
            <div className={styles.movieCardsContainer}>
                <MovieCards category={category}/>
            </div>
        </div>
    );
};

export default TabMovies;

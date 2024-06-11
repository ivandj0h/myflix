import React, { useState } from 'react';
import styles from './tab-movies.module.css';
import MovieCards from '@/components/movies/MovieCards';

const TabMovies: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Now Playing');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.tabMoviesContainer}>
            <div className={styles.tabs}>
                {['Now Playing', 'Upcoming Movies', 'Top Rated Movies'].map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className={styles.cardsContainer}>
                <MovieCards category={activeTab} />
            </div>
        </div>
    );
};

export default TabMovies;

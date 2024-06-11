"use client"

import React, { useState } from 'react';
import styles from './tabMovies.module.css';

const TabMovies: React.FC = () => {
    const [activeTab, setActiveTab] = useState('nowPlaying');

    const tabs = [
        { id: 'nowPlaying', label: 'Now Playing' },
        { id: 'upcomingMovies', label: 'Upcoming Movies' },
        { id: 'topRatedMovies', label: 'Top Rated Movies' },
    ];

    return (
        <div className={styles.tabsContainer}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default TabMovies;

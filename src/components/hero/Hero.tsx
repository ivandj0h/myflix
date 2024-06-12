import React, { useState } from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import styles from './hero.module.css';
import ModalHero from '../modal/ModalHero'; // Menggunakan komponen ModalHero

const Hero: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroOverlay} />
            <video
                className={styles.heroVideo}
                src="https://www.w3schools.com/howto/rain.mp4"
                autoPlay
                loop
                muted
            />
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Extraordinary You</h1>
                <p className={styles.heroDescription}>
                    What a fascinating setting! Eun Dan Oh, a high school girl, accidentally found herself to be a
                    supporting role living in a...
                </p>
                <div className={styles.heroButtons}>
                    <button className={styles.playButton} onClick={openModal}>
                        <FaPlay style={{ marginRight: '8px' }} />
                        PLAY
                    </button>
                    <button className={styles.moreInfoButton}>
                        <FaInfoCircle style={{ marginRight: '8px' }} />
                        More Info
                    </button>
                </div>
            </div>
            {isModalOpen && <ModalHero onClose={closeModal} />}
        </div>
    );
};

export default Hero;

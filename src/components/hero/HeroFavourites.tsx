import React from 'react';
import Image from 'next/image';
import styles from "@/components/hero/hero.module.css";
import Footer from "@/components/footer/Footer";

const HeroFavourites: React.FC = () => {
    return (
        <>
            <div className={styles.heroContainer}>
                <div className={styles.heroOverlay}/>
                <Image
                    src='https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    alt='Hero image'
                    layout='fill'
                    objectFit='cover'
                />
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Favourites</h1>
                    <p className={styles.heroDescription}>
                        Dive into a world of extraordinary journeys and unforgettable characters. Experience the thrill
                        of
                        the unknown and the beauty of the unexplored.
                    </p>
                </div>
            </div>

        </>
    );
};

export default HeroFavourites;

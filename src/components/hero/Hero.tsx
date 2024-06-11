import React from 'react';
import {FaPlay, FaInfoCircle} from 'react-icons/fa';
import styles from './hero.module.css';

const Hero: React.FC = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroOverlay}/>
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
                    <button className={styles.playButton}>
                        <FaPlay style={{marginRight: '8px'}}/>
                        PLAY
                    </button>
                    <button className={styles.moreInfoButton}>
                        <FaInfoCircle style={{marginRight: '8px'}}/>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;


{/*<Image*/
}
{/*    src='https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'*/
}
{/*    alt='Hero image'*/
}
{/*    layout='fill'*/
}
{/*    objectFit='cover'*/
}
{/*/>*/
}

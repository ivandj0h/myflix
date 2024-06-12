import React from 'react';
import styles from './modal-hero.module.css';

interface ModalHeroProps {
    onClose: () => void;
}

const ModalHero: React.FC<ModalHeroProps> = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <video
                    className={styles.modalVideo}
                    src="https://www.w3schools.com/howto/rain.mp4"
                    autoPlay
                    controls
                />
            </div>
        </div>
    );
};

export default ModalHero;

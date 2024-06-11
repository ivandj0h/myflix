import React from 'react';
import styles from './loading-spinner.module.css';

const LoadingSpinner: React.FC = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default LoadingSpinner;

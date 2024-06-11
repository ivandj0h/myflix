"use client"

import React, { useEffect, useState } from 'react';
import styles from './register-page.module.css';

const RegisterPage: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // atau return <div>Loading...</div>
    }

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <video
                    className={styles.backgroundVideo}
                    src="https://www.w3schools.com/howto/rain.mp4"
                    autoPlay
                    loop
                    muted
                />
            </div>
            <div className={styles.overlay} />
            <div className={styles.registerBox}>
                <h1 className={styles.title}>Sign Up</h1>
                <p className={styles.warning}>Pay attention: this is not the original Netflix sign up. Don’t insert your real credentials here!</p>
                <form className={styles.form}>
                    <input type="text" placeholder="Your name" className={styles.input} />
                    <input type="email" placeholder="E-mail" className={styles.input} />
                    <input type="password" placeholder="Password" className={styles.input} />
                    <input type="password" placeholder="Repeat your password" className={styles.input} />
                    <button type="submit" className={styles.signUpButton}>Sign Up</button>
                </form>
                <p className={styles.signInText}>Do you already have an account? <a href="/login" className={styles.signInLink}>Sign In</a></p>
            </div>
        </div>
    );
};

export default RegisterPage;

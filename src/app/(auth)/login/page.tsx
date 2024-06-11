import React from 'react';
import styles from './login-page.module.css';

const LoginPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <video
                    className={styles.heroVideo}
                    src="https://www.w3schools.com/howto/rain.mp4"
                    autoPlay
                    loop
                    muted
                />
            </div>
            <div className={styles.overlay} />
            <div className={styles.loginBox}>
                <h1 className={styles.title}>Sign In</h1>
                <p className={styles.warning}>Pay attention: this is not the original Netflix sign in. Don’t insert your real credentials here!</p>
                <form className={styles.form}>
                    <input type="email" placeholder="E-mail" className={styles.input} />
                    <input type="password" placeholder="Password" className={styles.input} />
                    <button type="submit" className={styles.signInButton}>Sign in</button>
                    <button type="button" className={styles.googleButton}>Sign in with Google</button>
                    <button type="button" className={styles.anonymousButton}>Sign in anonymously</button>
                </form>
                <p className={styles.signUpText}>Haven't you registered yet? <a href="/register" className={styles.signUpLink}>Sign Up</a></p>
            </div>
        </div>
    );
};

export default LoginPage;

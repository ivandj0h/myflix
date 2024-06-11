"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth } from '@/components/utils/firebase';
import { FaKey, FaGoogle } from "react-icons/fa";
import styles from './login-page.module.css';
import {isUserLoggedIn} from "@/components/utils/auth";
import LoadingSpinner from '@/components/utils/LoadingSpinner';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailLoading, setIsEmailLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setErrorMessage('');
        if (isUserLoggedIn()) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                router.push('/dashboard');
            }, 5000); // Delay for 5 seconds
        }
    }, [email, password, router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setEmailError(!email);
        setPasswordError(!password);

        if (!email || !password) {
            setErrorMessage('Email and Password cannot be empty.');
            return;
        }

        setIsEmailLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('userToken', await user.getIdToken());
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/dashboard');
        } catch (error: any) {
            if (error.code === 'auth/user-not-found') {
                setErrorMessage('User Not Found!');
            } else if (error.code === 'auth/wrong-password') {
                setErrorMessage('Invalid Credentials');
            } else {
                setErrorMessage('Error logging in');
            }
            setIsEmailLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setIsGoogleLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            localStorage.setItem('userToken', await user.getIdToken());
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/dashboard');
        } catch (error) {
            console.error('Error logging in with Google:', error);
            setIsGoogleLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            {isLoading && (
                <div className={styles.modal}>
                    <LoadingSpinner />
                </div>
            )}
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
            <div className={styles.loginBox}>
                <div className={styles.logo}>
                    <span className={styles.logoThin}>My</span><span className={styles.logoBold}>flix</span>
                </div>
                <h1 className={styles.title}>Sign In</h1>
                {errorMessage && <div className={styles.toast}>{errorMessage}</div>}
                <form className={styles.form} onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className={`${styles.input} ${emailError ? styles.inputError : ''}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={`${styles.input} ${passwordError ? styles.inputError : ''}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.buttonContainer}>
                        <button
                            type="submit"
                            className={styles.signInButton}
                            disabled={isEmailLoading || isGoogleLoading}
                        >
                            {isEmailLoading ? 'Processing...' : (
                                <>
                                    <FaKey style={{ marginRight: '8px' }} />
                                    Sign in
                                </>
                            )}
                        </button>
                        <button
                            type="button"
                            className={styles.googleButton}
                            onClick={handleGoogleSignIn}
                            disabled={isEmailLoading || isGoogleLoading}
                        >
                            {isGoogleLoading ? 'Processing...' : (
                                <>
                                    <FaGoogle style={{ marginRight: '8px' }} />
                                    Google
                                </>
                            )}
                        </button>
                    </div>
                </form>
                <p className={styles.signUpText}>
                    Haven&lsquo;t you registered yet? <a href="/register" className={styles.signUpLink}>Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;

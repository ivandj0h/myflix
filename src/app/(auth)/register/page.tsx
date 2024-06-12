"use client"

import React, { useEffect, useState } from 'react';
import styles from './register-page.module.css';
import { SiGnuprivacyguard } from "react-icons/si";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/components/utils/firebase';

const RegisterPage: React.FC = () => {
    const [isClient, setIsClient] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    const [isRepeatPasswordEmpty, setIsRepeatPasswordEmpty] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        let isValid = true;

        if (!email) {
            setIsEmailEmpty(true);
            isValid = false;
        } else {
            setIsEmailEmpty(false);
        }

        if (!password) {
            setIsPasswordEmpty(true);
            isValid = false;
        } else {
            setIsPasswordEmpty(false);
        }

        if (!repeatPassword) {
            setIsRepeatPasswordEmpty(true);
            isValid = false;
        } else {
            setIsRepeatPasswordEmpty(false);
        }

        if (!email || !password || !repeatPassword) {
            setErrorMessage('Email and Password cannot be empty.');
            setSuccessMessage('');
            return;
        } else if (password !== repeatPassword) {
            setErrorMessage('Password and Confirm Password do not match.');
            setSuccessMessage('');
            return;
        } else {
            setErrorMessage('');
        }

        if (isValid) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                setSuccessMessage("You're Successfully Registered");
                setErrorMessage('');
            } catch (error: any) {
                if (error.code === 'auth/email-already-in-use') {
                    setErrorMessage('Email is already in use.');
                } else {
                    setErrorMessage(error.message);
                }
                setSuccessMessage('');
            }
        }
    };

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
                <div className={styles.logo}>
                    <span className={styles.logoThin}>My</span><span className={styles.logoBold}>flix</span>
                </div>
                <h1 className={styles.title}>Sign Up</h1>
                {errorMessage && <div className={styles.toast}>{errorMessage}</div>}
                {successMessage && <div className={styles.successToast}>{successMessage}</div>}
                <form className={styles.form} onSubmit={handleSignUp}>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className={`${styles.input} ${isEmailEmpty ? styles.inputError : ''}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={`${styles.input} ${isPasswordEmpty ? styles.inputError : ''}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Repeat your password"
                        className={`${styles.input} ${isRepeatPasswordEmpty ? styles.inputError : ''}`}
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <button type="submit" className={styles.signUpButton}>
                        <SiGnuprivacyguard style={{marginRight: '8px'}}/>
                        Sign Up
                    </button>
                </form>
                <p className={styles.signInText}>Do you already have an account? <a href="/login"
                                                                                    className={styles.signInLink}>Sign
                    In</a></p>
            </div>
        </div>
    );
};

export default RegisterPage;

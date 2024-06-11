"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle, FaKey } from "react-icons/fa";
import { auth } from '@/components/utils/firebase';
import styles from './login-page.module.css';

const LoginPage: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailLoading, setIsEmailLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && localStorage.getItem('userToken')) {
            router.replace('/dashboard');
        }
    }, [router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsEmailLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('userToken', await user.getIdToken());
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/dashboard');
        } catch (error) {
            console.error('Error logging in:', error);
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
                <form className={styles.form} onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.signInButton} disabled={isEmailLoading || isGoogleLoading}>
                            {isEmailLoading ? 'Processing...' : (
                                <>
                                    <FaKey style={{ marginRight: '8px' }} />
                                    Sign in
                                </>
                            )}
                        </button>
                        <button type="button" className={styles.googleButton} onClick={handleGoogleSignIn} disabled={isEmailLoading || isGoogleLoading}>
                            {isGoogleLoading ? 'Processing...' : (
                                <>
                                    <FaGoogle style={{ marginRight: '8px' }} />
                                    Google
                                </>
                            )}
                        </button>
                    </div>
                </form>
                <p className={styles.signUpText}>Haven&lsquo;t you registered yet? <a href="/register" className={styles.signUpLink}>Sign Up</a></p>
            </div>
        </div>
    );
};

export default LoginPage;

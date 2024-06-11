"use client"

import React, { useEffect, useState } from 'react';
import MenuLinks from '@/components/navbar/menu/MenuLinks';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const lightMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleThemeChange = (event: MediaQueryListEvent) => {
            console.log('Theme change event detected');
            setIsLightTheme(event.matches);
            console.log('Theme set to:', event.matches ? 'Light' : 'Dark');
        };

        console.log('Adding event listeners');
        window.addEventListener('scroll', handleScroll);
        lightMediaQuery.addEventListener('change', handleThemeChange);
        darkMediaQuery.addEventListener('change', handleThemeChange);

        // Initial check
        setIsLightTheme(lightMediaQuery.matches);
        console.log('Initial Theme:', lightMediaQuery.matches ? 'Light' : 'Dark');

        return () => {
            console.log('Removing event listeners');
            window.removeEventListener('scroll', handleScroll);
            lightMediaQuery.removeEventListener('change', handleThemeChange);
            darkMediaQuery.removeEventListener('change', handleThemeChange);
        };
    }, []);

    useEffect(() => {
        // console.log('Scrolled state:', scrolled);
    }, [scrolled]);

    useEffect(() => {
        // console.log('Theme state:', isLightTheme);
    }, [isLightTheme]);

    return (
        <div
            className={`${styles.container} ${scrolled ? (isLightTheme ? styles.scrollLight : styles.scrollDark) : (isLightTheme ? styles.light : styles.dark)}`}>
            <div className={styles.logo}>
                <span className={styles.logoThin}>My</span><span className={styles.logoBold}>flix</span>
            </div>
            <div>
                <MenuLinks/>
            </div>
        </div>
    );
};

export default Navbar;

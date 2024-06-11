"use client";

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import styles from './footer.module.css';
import { useTheme } from '@/app/context/ThemeContext';

const Footer: React.FC = () => {
    const { isDarkTheme } = useTheme();

    return (
        <footer className={`${styles.footer} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.socialLinks}>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaYoutube /></a>
            </div>
            <div className={styles.footerLinks}>
                <div className={styles.footerColumn}>
                    <a href="#">Audio Description</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Legal Notices</a>
                    <a href="#" className={styles.serviceCode}>Service Code</a>
                </div>
                <div className={styles.footerColumn}>
                    <a href="#">Help Center</a>
                    <a href="#">Jobs</a>
                    <a href="#">Cookie Preferences</a>
                </div>
                <div className={styles.footerColumn}>
                    <a href="#">Gift Cards</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Corporate Information</a>
                </div>
                <div className={styles.footerColumn}>
                    <a href="#">Media Center</a>
                    <a href="#">Privacy</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; 2024 MyFlix, Inc.
            </div>
        </footer>
    );
};

export default Footer;

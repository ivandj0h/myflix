"use client"

import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import { MENU_LISTS } from '@/app/constants/MenuLists';
import { MenuListItem } from '@/app/interfaces/globalInterfaces';
import styles from './menu-links.module.css';
import NavLink from "@/components/navbar/navlink/navLink";
import {FaRegSun, FaMoon, FaBars} from "react-icons/fa";
import { useTheme } from '@/app/context/ThemeContext';
import ProfileModal from '@/components/profile/ProfileModal';
import LoadingSpinner from '@/components/utils/LoadingSpinner';
import Link from "next/link";

const MenuLinks: React.FC = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const { isDarkTheme, toggleTheme } = useTheme();
    const [session, setSession] = useState(typeof window !== "undefined" && localStorage.getItem('userToken'));

    const handleLogout = () => {
        setIsLoading(true);
        setTimeout(() => {
            localStorage.removeItem('userToken');
            localStorage.removeItem('user');
            localStorage.removeItem('my_favourites');
            setSession(null);
            setIsLoading(false);
            window.location.href = '/';
        }, 3000);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const openProfileModal = () => {
        setProfileOpen(true);
    };

    const closeProfileModal = () => {
        setProfileOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    const handleLinkClick = () => {
        setOpen(false); // Close the dropdown menu when a link is clicked
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('user') || '{}') : {};

    return (
        <div className={styles.container}>
            {isLoading && (
                <div className={styles.modal}>
                    <LoadingSpinner />
                </div>
            )}
            <div className={styles.webLinks}>
                {MENU_LISTS.map((link: MenuListItem) => (
                    <NavLink item={link} key={link.id} />
                ))}
                {session && (
                    <>
                        <button onClick={toggleTheme} className={styles.toggleButton}>
                            {isDarkTheme ? <FaRegSun /> : <FaMoon />}
                        </button>
                        <span className={styles.username}>Welcome, {user.displayName || 'Anonymous'}</span>
                        <div className={styles.avatarContainer} ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className={styles.avatarButton}
                                aria-haspopup="true"
                                aria-expanded={dropdownOpen}
                            >
                                <Image
                                    src={user.photoURL || '/images/user.png'}
                                    alt='User Avatar'
                                    className={styles.avatar}
                                    width={40}
                                    height={40}
                                />
                            </button>
                            {dropdownOpen && (
                                <div className={styles.dropdownMenu}>
                                    <button onClick={openProfileModal} className={styles.dropdownItem}>Profile</button>
                                    <button onClick={handleLogout} className={styles.dropdownItem}>Logout</button>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
            <button onClick={() => setOpen(prev => !prev)} className={styles.menuButton}>
                <FaBars />
            </button>
            {open && (
                <div className={styles.mobileLinks}>
                    {MENU_LISTS.map((link: MenuListItem) => (
                        <Link href={link.path} className={styles.mobileLinkItem} key={link.id} onClick={handleLinkClick}>
                            {link.menuTitle}
                        </Link>
                    ))}
                </div>
            )}
            {profileOpen && <ProfileModal onClose={closeProfileModal} />}
        </div>
    );
};

export default MenuLinks;

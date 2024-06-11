"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { MENU_LISTS } from '@/app/constants/MenuLists';
import { MenuListItem } from '@/app/interfaces/globalInterfaces';
import styles from './menu-links.module.css';
import NavLink from "@/components/navbar/navlink/navLink";
import { FaRegSun, FaMoon } from "react-icons/fa";
import { useTheme } from '@/app/context/ThemeContext';
import ProfileModal from '@/components/profile/ProfileModal';

const MenuLinks: React.FC = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const { isDarkTheme, toggleTheme } = useTheme(); // Use useTheme hook

    // Temporary Code, will change on next phase
    const session = typeof window !== "undefined" && localStorage.getItem('userToken');
    const isAdmin = false;

    const handleSignIn = () => {
        router.push('/login');
    };

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('user');
        router.replace('/login');
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

    const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('user') || '{}') : {};

    return (
        <div className={styles.container}>
            <div className={styles.webLinks}>
                {MENU_LISTS.map((link: MenuListItem) => (
                    <NavLink item={link} key={link.id} />
                ))}
                {session && (
                    <>
                        <button onClick={toggleTheme} className={styles.toggleButton}>
                            {isDarkTheme ? <FaRegSun /> : <FaMoon />}
                        </button>
                            <span>Welcome, {user.displayName || 'User'}</span>
                        <div className={styles.avatarContainer}>
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
            <button onClick={() => setOpen(prev => !prev)} className={styles.menuButton}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {MENU_LISTS.map((link: MenuListItem) => (
                        <NavLink item={link} key={link.id} />
                    ))}
                </div>
            }
            {profileOpen && <ProfileModal onClose={closeProfileModal} />}
        </div>
    );
};

export default MenuLinks;

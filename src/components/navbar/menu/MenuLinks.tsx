"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { MENU_LISTS } from '@/app/constants/MenuLists';
import { MenuListItem } from '@/app/interfaces/globalInterfaces';
import styles from './menu-links.module.css';
import NavLink from "@/components/navbar/navlink/navLink";
import { FaRegSun, FaMoon } from "react-icons/fa";
import { useTheme } from '@/app/context/ThemeContext'

const MenuLinks: React.FC = () => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const { isDarkTheme, toggleTheme } = useTheme(); // Use useTheme hook

    // Temporary Code, will change on next phase
    const session = false;
    const isAdmin = false;

    const handleSignIn = () => {
        router.push('/login');
    };

    return (
        <div className={styles.container}>
            <div className={styles.webLinks}>
                {MENU_LISTS.map((link: MenuListItem) => (
                    <NavLink item={link} key={link.id} />
                ))}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink item={{ pathTitle: '/admin', path: '/admin', menuTitle: 'Admin' }} />
                        )}
                        <button onClick={toggleTheme} className={styles.toggleButton}>
                            {isDarkTheme ? <FaRegSun /> : <FaMoon />}
                        </button>
                        <button className={styles.logout}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <button onClick={toggleTheme} className={styles.toggleButton}>
                            {isDarkTheme ? <FaRegSun /> : <FaMoon />}
                        </button>
                        <button className={styles.login} onClick={handleSignIn}>Sign In</button>
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
        </div>
    );
};

export default MenuLinks;

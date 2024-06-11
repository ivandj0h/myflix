"use client"

import React from 'react';
import { useRouter } from 'next/navigation'
import {MENU_LISTS} from '@/app/constants/MenuLists'
import {MenuListItem} from '@/app/interfaces/globalInterfaces';
import styles from './menu-links.module.css';
import NavLink from "@/components/navbar/navlink/navLink";

const MenuLinks: React.FC = () => {

    // Hook
    const router = useRouter()
    const [open, setOpen] = React.useState(false);

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
                    <NavLink item={link} key={link.id}/>
                ))}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink item={{pathTitle: '/admin', path: '/admin', menuTitle: 'Admin'}}/>
                        )}
                        <button className={styles.logout}>Sign Out</button>
                    </>
                ) : (
                    <>
                    <button className={styles.login} onClick={handleSignIn}>Sign In</button>
                    </>
                )}
            </div>
            <button onClick={() =>setOpen(prev =>!prev)} className={styles.menuButton}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {MENU_LISTS.map((link: MenuListItem) => (
                        <NavLink item={link} key={link.id}/>
                    ))}
                </div>
            }
        </div>
    );
};

export default MenuLinks;

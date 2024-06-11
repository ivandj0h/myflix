"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './nav-link.module.css';
import { NavItem } from '@/app/interfaces/globalInterfaces';

interface NavLinkProps {
    item: NavItem;
}

const NavLink: React.FC<NavLinkProps> = ({ item }) => {
    const pathName = usePathname();

    return (
        <Link href={item.pathTitle} className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.menuTitle}
        </Link>
    );
};

export default NavLink;

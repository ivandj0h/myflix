import React from 'react';
import MenuLinks from '@/components/navbar/menu/MenuLinks';
import styles from './navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>myflix</div>
            <div>
                <MenuLinks />
            </div>
        </div>
    );
};

export default Navbar;

import React from 'react';
import MenuLinks from '@/components/navbar/MenuLinks';
import styles from './navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <div className={styles.container}>
            <div>Logo</div>
            <div>
                <MenuLinks />
            </div>
        </div>
    );
};

export default Navbar;

import React from 'react';
import MenuLinks from '@/components/navbar/MenuLinks';

const Navbar: React.FC = () => {
    return (
        <div>
            <div>Logo</div>
            <div>
                <MenuLinks />
            </div>
        </div>
    );
};

export default Navbar;

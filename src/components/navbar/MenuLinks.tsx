import React from 'react';
import Link from 'next/link';
import { MENU_LISTS } from '@/app/constants/MenuLists';
import { MenuListItem } from '@/app/interfaces/globalInterfaces';

const MenuLinks: React.FC = () => {
    return (
        <div>
            {MENU_LISTS.map((link: MenuListItem) => (
                <Link href={link.pathTitle} key={link.id}>
                    {link.menuTitle}
                </Link>
            ))}
        </div>
    );
};

export default MenuLinks;

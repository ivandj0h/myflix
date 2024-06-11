import React from 'react'
import {MENU_LISTS} from "@/app/constants/MenuLists";
import Link from "next/link";

const MenuLists = () => {
    return (
        <div>
            {MENU_LISTS.map((link =>(
                <Link href={link.pathTitle} key={link.id}>{link.menuTitle}</Link>
            )))}
        </div>
    )
}
export default MenuLists

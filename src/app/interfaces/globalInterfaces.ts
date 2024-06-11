// Root Layout Interface
import React from "react";

export interface RootLayoutProps {
    children: React.ReactNode;
}

// MenuLists Interface
export interface MenuListItem {
    id: string;
    pathTitle: string;
    menuTitle: string;
    path: string;
}


export interface NavItem {
    pathTitle: string;
    path: string;
    menuTitle: string;
}

export interface MenuListItem extends NavItem {
    id: string;
}


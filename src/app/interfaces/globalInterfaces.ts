// Root Layout Interface
import React from "react";

export interface RootLayoutProps {
    children: React.ReactNode;
}

export interface Metadata {
    title: string;
    description: string;
}

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

export interface NavLinkProps {
    item: NavItem;
    className?: string;
}

export interface Movie {
    id: number;
    title: string;
    imageUrl: string;
}

export interface MovieCardsProps {
    category: string;
}

export interface Movie {
    id: number;
    title: string;
    imageUrl: string;
}

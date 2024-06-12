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
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieModalProps {
    movie: Movie | null;
    onClose: () => void;
}

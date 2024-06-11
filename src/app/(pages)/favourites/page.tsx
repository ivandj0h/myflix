"use client"

import React from 'react';
import HeroFavourites from "@/components/hero/HeroFavourites";
import auth from "@/components/utils/auth";

const FavouritePage: React.FC = () => {
    return (
        <>
            <HeroFavourites />
        </>
    );
}

export default auth(FavouritePage);

"use client"


import React from 'react'
import PopularMovies from "@/components/popular/PopularMovies";
import Hero from "@/components/hero/Hero";
import auth from "@/components/utils/auth";

const DashboardPage = () => {
    return (
        <>
            <Hero />
            <PopularMovies />
        </>
    )
}

export default auth(DashboardPage);

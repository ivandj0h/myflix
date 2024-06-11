"use client";

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@/app/context/ThemeContext';

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // or a loading spinner
    }

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

export default ClientWrapper;

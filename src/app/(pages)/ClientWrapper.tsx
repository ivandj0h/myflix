"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider } from '@/app/context/ThemeContext';
import { isUserLoggedIn } from '@/components/utils/auth';


const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();


    useEffect(() => {
        setIsClient(true);
        if (!isUserLoggedIn()) {
            router.push('/login');
        }
    }, [router]);

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

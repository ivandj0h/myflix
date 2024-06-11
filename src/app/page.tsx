"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isUserLoggedIn } from '@/components/utils/auth';

const HomePage: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        if (isUserLoggedIn()) {
            // Jika pengguna sudah login, arahkan ke dashboard
            router.push('/dashboard');
        } else {
            // Jika pengguna belum login, arahkan ke login
            router.push('/login');
        }
    }, [router]);

    // Tampilan kosong atau spinner loading saat memeriksa status login
    return <div>Loading...</div>;
};

export default HomePage;

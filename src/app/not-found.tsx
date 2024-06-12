"use client"

import React, { useEffect, useState } from 'react';
import LoadingSpinner from "@/components/utils/LoadingSpinner";
import { useRouter } from 'next/navigation';

const NotFound: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
            setTimeout(() => {
                router.push('/');
            }, 2000);
        }, 5000);
    }, [router]);

    return (
        <div className="flex items-center justify-center h-screen">
            {!isLoading ? (
                <div className="bg-black-100 border-2 border-gray-300 rounded-3xl p-10 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-red-800">404: Not found</h1>
                    <p className="text-lg text-red-900">Oops! The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
                </div>
            ) : (
                <LoadingSpinner />
            )}
        </div>
    );
};

export default NotFound;

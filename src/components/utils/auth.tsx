"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const auth = (WrappedComponent: React.FC) => {
    const AuthComponent = (props: any) => {
        const [isLoading, setIsLoading] = useState(true);
        const router = useRouter();

        useEffect(() => {
            const user = localStorage.getItem('user');
            if (!user) {
                router.replace('/login');
            } else {
                setIsLoading(false);
            }
        }, [router]);

        if (isLoading) {
            return <div>Loading...</div>; // Or any loading spinner component
        }

        return <WrappedComponent {...props} />;
    };

    AuthComponent.displayName = `Auth(${getDisplayName(WrappedComponent)})`;

    return AuthComponent;
};

const getDisplayName = (WrappedComponent: React.FC): string => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export const isUserLoggedIn = (): boolean => {
    const token = typeof window !== "undefined" ? localStorage.getItem('userToken') : null;
    return !!token;
};

export default auth;

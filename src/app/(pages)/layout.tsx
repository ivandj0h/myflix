import React from 'react';
import { Inter } from 'next/font/google';
import '../globals.css'
import { RootLayoutProps } from '@/app/interfaces/globalInterfaces';
import ClientWrapper from './ClientWrapper';
import Navbar from '@/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'myflix',
    description: 'Your ultimate movie collection app.',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ClientWrapper>
            <Navbar />
            <div style={{ flex: 1 }}>
                {children}
            </div>
        </ClientWrapper>
        </body>
        </html>
    );
};

export default RootLayout;

import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { RootLayoutProps } from '@/app/interfaces/globalInterfaces'

const inter = Inter({ subsets: ['latin'] });

interface Metadata {
    title: string;
    description: string;
}

const metadata: Metadata = {
    title: 'myflix',
    description: 'Your ultimate movie collection app.',
};


const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
export { metadata };

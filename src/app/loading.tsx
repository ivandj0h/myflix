"use client"


import React, {useEffect, useState} from 'react';
import styles from "@/components/navbar/menu/menu-links.module.css";
import LoadingSpinner from "@/components/utils/LoadingSpinner";

const Loading: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 5000);

    }, []);
    return (
        <div>
            {isLoading && (
                <div className={styles.modal}>
                    <LoadingSpinner />
                </div>
            )}
        </div>
    );
};

export default Loading;

import React from 'react';
import Image from "next/image";
import styles from './profile-modal.module.css';

interface ProfileModalProps {
    onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
    const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('user') || '{}') : {};

    const formatDate = (timestamp: string | number | Date) => {
        const date = new Date(Number(timestamp));
        if (isNaN(date.getTime())) {
            return 'N/A';
        }
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.logo}>
                    <span className={styles.logoThin}>My</span><span className={styles.logoBold}>flix</span>
                </div>
                <h2 className={styles.title}>User Profile</h2>
                <div className={styles.profileDetails}>
                    <Image
                        src={user.photoURL || '/images/user.png'}
                        alt='User Avatar'
                        className={styles.avatar}
                        width={100}
                        height={100}
                    />
                    <p><strong>Full Name:</strong> {user.displayName || 'N/A'}</p>
                    <p><strong>Email:</strong> {user.email || 'N/A'}</p>
                    <p><strong>Join Date:</strong> {formatDate(user.createdAt)}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;

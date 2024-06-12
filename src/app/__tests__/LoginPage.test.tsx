import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from '../../app/(auth)/login/page';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/components/utils/firebase';
import { isUserLoggedIn } from '@/components/utils/auth';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
    signInWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    GoogleAuthProvider: jest.fn(),
}));

jest.mock('@/app/components/utils/firebase', () => ({
    auth: jest.fn(),
}));

jest.mock('@/app/components/utils/auth', () => ({
    isUserLoggedIn: jest.fn(),
}));

const mockedUseRouter = useRouter as jest.Mock;
const mockedSignInWithEmailAndPassword = signInWithEmailAndPassword as jest.Mock;
const mockedSignInWithPopup = signInWithPopup as jest.Mock;
const mockedIsUserLoggedIn = isUserLoggedIn as jest.Mock;

describe('LoginPage', () => {
    beforeEach(() => {
        mockedUseRouter.mockReturnValue({
            push: jest.fn(),
        });
        mockedIsUserLoggedIn.mockReturnValue(false);
    });

    test('renders login page correctly', () => {
        render(<LoginPage />);
        expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByText('Sign In')).toBeInTheDocument();
    });

    test('shows error message if email and password are empty', async () => {
        render(<LoginPage />);
        fireEvent.click(screen.getByText('Sign In'));

        await waitFor(() => {
            expect(screen.getByText('Email and Password cannot be empty.')).toBeInTheDocument();
        });
    });

    test('calls signInWithEmailAndPassword on login', async () => {
        render(<LoginPage />);

        fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
        fireEvent.click(screen.getByText('Sign In'));

        await waitFor(() => {
            expect(mockedSignInWithEmailAndPassword).toHaveBeenCalledWith(auth, 'test@example.com', 'password123');
        });
    });

    test('handles Google sign-in correctly', async () => {
        render(<LoginPage />);

        fireEvent.click(screen.getByText('Google'));

        await waitFor(() => {
            expect(mockedSignInWithPopup).toHaveBeenCalledWith(auth, expect.any(GoogleAuthProvider));
        });
    });
});

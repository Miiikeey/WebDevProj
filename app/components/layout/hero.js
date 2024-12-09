"use client";

import { useUserAuth } from '../utils/auth-context';
import Link from 'next/link';

export default function Hero() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignInClick = async () => {
    await gitHubSignIn();
  };

  const handleLogoutClick = async () => {
    await firebaseSignOut();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!user ? (
        <button
          onClick={handleSignInClick}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Sign In
        </button>
      ) : (
        <>
          <Link href="/booking" passHref>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Book Now
            </button>
          </Link>
          <button
            onClick={handleLogoutClick}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
        </>
      )}
    </div>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('username');
    if (token) {
      setIsLoggedIn(true);
      setUsername(name || '');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    router.push('/main');
  };

  return (
    <header className="flex w-full justify-between border-b border-gray-200 bg-BG-black px-10 py-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src="/colorLogo.svg" alt="logo" width={40} height={40} className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <span className="text-white">{username}님</span>
            <button
              className="rounded border border-gray-600 px-2 py-1 text-gray-600 hover:bg-gray-100 hover:text-black"
              onClick={handleLogout}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <button
              className="rounded border border-gray-600 px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black"
              onClick={() => router.push('/login')}>
              로그인
            </button>
            <button
              className="hover:bg-main-dark rounded bg-main px-4 py-2 text-white"
              onClick={() => router.push('/sign-up')}>
              회원가입
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

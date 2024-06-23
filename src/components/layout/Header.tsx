'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
    <header className="flex justify-between w-full max-w-[600px] px-4 py-4 bg-BG-black border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img src="/image/CeosLogo.svg" alt="CEOS Logo" className="h-8" />
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <span className="text-white">{username}님</span>
            <button
              className="px-2 py-1 border border-gray-600 text-gray-600 rounded hover:bg-gray-100 hover:text-black"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <button
              className="px-4 py-2 border border-gray-600 text-gray-600 rounded hover:bg-gray-100 hover:text-black"
              onClick={() => router.push('/login')}
            >
              로그인
            </button>
            <button
              className="px-4 py-2 bg-main text-white rounded hover:bg-main-dark"
              onClick={() => router.push('/sign-up')}
            >
              회원가입
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

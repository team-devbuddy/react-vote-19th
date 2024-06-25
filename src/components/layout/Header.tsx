'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState } from '@/lib/state/atom';

function Header() {
  const { isLoggedIn, username } = useRecoilValue(authState);
  const setAuthState = useSetRecoilState(authState);

  const handleLogout = () => {
    setAuthState({
      isLoggedIn: false,
      username: '',
    });
  };

  const authButtons = isLoggedIn 
    ? [
      { label: `${username}님`, href: '/', onClick: undefined, className: 'text-white text-sm sm:text-lg' },
      { label: '로그아웃', href: '/', onClick: handleLogout, className: 'rounded border border-gray-600 px-2 py-1 text-gray-600 hover:bg-gray-100 hover:text-black text-sm sm:px-4 sm:py-2 sm:text-lg' },
    ]
    : [
      { label: '로그인', href: '/login', onClick: undefined, className: 'rounded border border-gray-600 px-2 py-1 text-gray-600 hover:bg-gray-100 hover:text-black text-sm sm:px-4 sm:py-2 sm:text-lg' },
      { label: '회원가입', href: '/sign-up', onClick: undefined, className: 'hover:bg-main-dark rounded bg-main px-2 py-1 text-white text-sm sm:px-4 sm:py-2 sm:text-lg' },
    ];

  return (
    <header className="flex w-full justify-between border-b border-gray-200 bg-BG-black px-10 sm:px-14 py-4">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Link href="/">
          <Image src="/colorLogo.svg" alt="logo" width={40} height={40} className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        {authButtons.map((button, index) => (
          <Link key={index} href={button.href}>
            <button onClick={button.onClick} className={button.className}>
              {button.label}
            </button>
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;

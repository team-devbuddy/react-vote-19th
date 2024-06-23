'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';


function VotingMainPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-BG-black text-white">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow w-full max-w-[600px] px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">파트장 / 데모데이 투표</h1>
        <div className="flex space-x-4">
          <div
            className="w-40 h-40 border-2 border-main rounded-lg flex items-center justify-center text-center text-xl font-semibold cursor-pointer bg-BG-black hover:bg-main active:bg-main"
            onClick={() => router.push('/vote/part-leader')}
          >
            파트장 투표<br />바로가기
          </div>
          <div
            className="w-40 h-40 border-2 border-main rounded-lg flex items-center justify-center text-center text-xl font-semibold cursor-pointer bg-BG-black hover:bg-main active:bg-main"
            onClick={() => router.push('/vote/demo-day')}
          >
            데모데이 투표<br />바로가기
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default VotingMainPage;

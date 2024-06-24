'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

function VotingMainPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center bg-BG-black text-white">
      <main className="flex w-full max-w-[600px] flex-grow flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-center text-3xl font-bold">파트장 / 데모데이 투표</h1>
        <div className="flex space-x-4">
          <div
            className="flex h-40 w-40 cursor-pointer items-center justify-center rounded-lg border-2 border-main bg-BG-black text-center text-xl font-semibold hover:bg-main active:bg-main"
            onClick={() => router.push('/vote/select')}>
            파트장 투표
            <br />
            바로가기
          </div>
          <div
            className="flex h-40 w-40 cursor-pointer items-center justify-center rounded-lg border-2 border-main bg-BG-black text-center text-xl font-semibold hover:bg-main active:bg-main"
            onClick={() => router.push('/demo-day-vote/vote')}>
            데모데이 투표
            <br />
            바로가기
          </div>
        </div>
      </main>
    </div>
  );
}

export default VotingMainPage;

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { authState} from '@/lib/state/atom'

function VotingMainPage() {
  const router = useRouter();
  const auth = useRecoilValue(authState);

  function handleVoteClick(path: string): void {
    if (!auth.isLoggedIn) {
      router.push('/login');
    } else {
      router.push(path);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-BG-black text-white">
      <main className="flex w-full max-w-[600px] flex-grow flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-center text-3xl font-bold">파트장 / 데모데이 투표</h1>
        <div className="flex space-x-4">
          <div
            className="flex h-40 w-40 cursor-pointer items-center justify-center rounded-lg border-2 border-main bg-BG-black text-center text-xl font-semibold hover:bg-main active:bg-main"
            onClick={() => handleVoteClick('/vote/select')}>
            파트장 투표
            <br />
            바로가기
          </div>
          <div
            className="flex h-40 w-40 cursor-pointer items-center justify-center rounded-lg border-2 border-main bg-BG-black text-center text-xl font-semibold hover:bg-main active:bg-main"
            onClick={() => handleVoteClick('/demo-day-vote/vote')}>
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

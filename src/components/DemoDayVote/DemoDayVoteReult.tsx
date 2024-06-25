'use client';

import { voteResult } from '@/lib/actions/voteAction';
import { useEffect, useState } from 'react';

interface VoteResult {
  id: number;
  name: string;
  voteCount: string;
}

export default function DemoDayVoteResult() {
  const [voteResults, setVoteResults] = useState<VoteResult[]>([]);

  useEffect(() => {
    const fetchVoteResult = async () => {
      try {
        const response = await voteResult();
        const result: VoteResult[] = await response.json();
        console.log('투표 결과:', result);
        setVoteResults(result);
      } catch (error) {
        console.error('투표 결과 조회 중 오류 발생', error);
      }
    };
    fetchVoteResult();
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center bg-BG-black text-white">
      <main className="flex w-full flex-grow flex-col items-center justify-center px-12 pb-20">
        <h1 className="mb-8 text-center text-3xl font-bold">데모데이 투표 현황</h1>

        <div className="flex w-full gap-12">
          <div className="flex w-full flex-col gap-6">
            {voteResults.map((result) => (
              <div
                key={result.id}
                className="flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-main bg-main px-6 py-3 text-center hover:bg-main active:bg-main">
                <div className="flex items-center gap-6">
                  <div className="rounded-lg bg-white">
                    <p className="px-3 text-xl font-semibold text-BG-black">{result.id}</p>
                  </div>
                  <p className="text-2xl font-semibold">{result.name}</p>
                  <p className="text-xs text-gray-200">{result.voteCount}</p>
                </div>
                <div className="flex items-center text-2xl">{result.voteCount}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

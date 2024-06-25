'use client';

import { candiateList } from '@/lib/actions/voteAction';
import { useEffect, useState } from 'react';

interface Candidate {
  id: number;
  name: string;
  part: string;
  voteCount: number;
}

export default function BackLeaderVoteResult() {
  const [candidateList, setCandidateList] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchVoteResult = async () => {
      const accessToken = localStorage.getItem('token') || '';
      try {
        const response = await candiateList(accessToken);

        const candidates = response.members || [];

        if (Array.isArray(candidates)) {
          // Sort candidates by voteCount in descending order
          const sortedCandidates = candidates.sort((a: Candidate, b: Candidate) => b.voteCount - a.voteCount);
          // Select candidates with index 0 to 9
          const filteredCandidates = candidates.filter(
            (candidate: Candidate) => candidate.id >= 19 && candidate.id <= 28,
          );
          setCandidateList(filteredCandidates);
          console.log('Candidates:', filteredCandidates);
        } else {
          console.error('Expected an array of candidates');
        }
      } catch (error) {
        console.error('투표 결과 조회 중 오류 발생', error);
      }
    };
    fetchVoteResult();
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center bg-BG-black text-white">
      <main className="flex w-full flex-grow flex-col items-center justify-center px-12 pb-20">
        <h1 className="mb-8 pt-12 text-center text-3xl font-bold">BE 파트장 투표 현황</h1>

        <div className="flex w-full gap-12">
          <div className="flex w-full flex-col gap-6">
            {candidateList?.map((result, index) => (
              <div
                key={result.id}
                className={`flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-main px-6 py-3 text-center hover:bg-main active:bg-main ${index === 0 ? 'bg-main' : ''}`}>
                <div className="flex items-center gap-6">
                  <div className="rounded-lg bg-white">
                    <p className="px-3 text-xl font-semibold text-BG-black">{index + 1}</p>
                  </div>
                  <p className="text-2xl font-semibold">{result.name}</p>
                  {/* <p className="text-xs text-gray-200">{result.part}</p> */}
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

'use client';
import { LeaderVoteAction, candiateList } from '@/lib/actions/voteAction';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Candidate {
  id: number;
  name: string;
  part: string;
}

export default function BackEndVote() {
  const [candidateList, setCandidateList] = useState<Candidate[]>([]);
  const router = useRouter();

  const onClickVote = async (memberId: number) => {
    const token = localStorage.getItem('token') || '';
    try {
      const response = await LeaderVoteAction(memberId, token);

      if (response.ok) {
        alert('투표가 완료되었습니다.');
        router.push('/vote/back-end/result');
      }
    } catch (error) {
      console.error('투표 중 오류가 발생했습니다:', error);
    }
  };

  useEffect(() => {
    const fetchVoteResult = async () => {
      const accessToken = localStorage.getItem('token') || '';
      try {
        const response = await candiateList(accessToken);

        const candidates = response.members || [];

        if (Array.isArray(candidates)) {
          const filteredCandidates = candidates.filter(
            (candidate: Candidate) => candidate.id >= 15 && candidate.id <= 24,
          );
          setCandidateList(filteredCandidates);
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
    <div className="flex flex-col items-center justify-center bg-BG-black text-white">
      <main className="flex w-full flex-grow flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-center text-3xl font-bold">백엔드 파트장 투표</h1>
        <div className="flex gap-12">
          <div className="flex flex-wrap justify-center gap-6 px-10">
            {candidateList.map((data, index) => (
              <div
                key={data.id}
                onClick={() => onClickVote(data.id)}
                className="flex h-20 w-40 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-main bg-BG-black text-center hover:bg-main active:bg-main">
                <p className="text-xs text-gray-400">{data.part}</p>
                <p className="text-xl font-semibold">{data.name}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="pt-12 text-sm font-light">📣 투표를 하시고자하는 사람을 클릭해주세요.</p>
      </main>
    </div>
  );
}

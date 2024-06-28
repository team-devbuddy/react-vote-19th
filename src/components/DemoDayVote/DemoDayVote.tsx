'use client';

import { voteAction } from '@/lib/actions/voteAction';
import { useRouter } from 'next/navigation';

export default function DemoDayVote() {
  const router = useRouter();

  const onClickVote = async (teamId: number) => {
    const token = localStorage.getItem('token') || '';
    try {
      const response = await voteAction(teamId, token);
      const data = await response.json();
      if (response.ok) {
        alert('투표가 완료되었습니다.');
        router.push('/demo-day-vote/result');
      } else if (response.status === 400) {
        alert(data.message);
      }
    } catch (error) {}
  };

  return (
    <div className="flex flex-col items-center justify-center bg-BG-black text-white">
      <main className="flex w-full flex-grow flex-col items-center justify-center px-4 pb-20">
        <h1 className="mb-8 text-center text-3xl font-bold">데모데이 투표</h1>
        <div className="flex gap-12">
          <div className="flex flex-wrap justify-center gap-6">
            <div
              onClick={() => onClickVote(1)}
              className="flex h-20 w-40 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-main bg-BG-black text-center hover:bg-main active:bg-main">
              <p className="text-xl font-semibold">비트버디</p>
              <p className="text-xs text-gray-400">베뉴 큐레이팅 서비스</p>
            </div>

            <div
              onClick={() => onClickVote(2)}
              className="flex h-20 w-40 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-main bg-BG-black text-center hover:bg-main active:bg-main">
              <p className="text-xl font-semibold">AZITO</p>
              <p className="text-xs text-gray-400">라이브아이돌 예약 플랫폼</p>
            </div>

            <div
              onClick={() => onClickVote(4)}
              className="flex h-20 w-40 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-main bg-BG-black text-center hover:bg-main active:bg-main">
              <p className="text-xl font-semibold">커플로그</p>
              <p className="text-xs text-gray-400">데이트 장소 큐레이션 서비스</p>
            </div>

            <div
              onClick={() => onClickVote(5)}
              className="flex h-20 w-40 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-main bg-BG-black text-center hover:bg-main active:bg-main">
              <p className="text-xl font-semibold">TIG</p>
              <p className="text-xs text-gray-400">스포츠 여가 예약 통합 플랫폼</p>
            </div>

            <div
              onClick={() => onClickVote(3)}
              className="flex h-20 w-40 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-main bg-BG-black text-center hover:bg-main active:bg-main">
              <p className="text-xl font-semibold">Buldog</p>
              <p className="text-xs text-gray-400">보충제 e커머스 플랫폼</p>
            </div>
          </div>
        </div>

        <p className="pt-12 text-sm font-light">📣 투표를 하시고자하는 팀을 클릭해주세요.</p>
      </main>
    </div>
  );
}

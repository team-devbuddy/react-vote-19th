import Link from 'next/link';

export default function DemoDayVoteSelectPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-BG-black text-white">
      <main className="flex w-full flex-grow flex-col items-center justify-center px-4 pb-20">
        <h1 className="mb-8 text-center text-3xl font-bold">데모데이 투표</h1>
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <Link href="/demo-day-vote/vote">
              <div className="flex h-40 w-40 cursor-pointer items-center justify-center rounded-lg border-2 border-main bg-BG-black text-center text-xl font-semibold hover:bg-main active:bg-main">
                CEOS 19기
                <br />
                데모데이 투표
              </div>
            </Link>
            <Link href="/demo-day-vote/result">
              <button className="rounded-lg bg-main px-[3.12rem] py-2 text-white">결과 보기</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

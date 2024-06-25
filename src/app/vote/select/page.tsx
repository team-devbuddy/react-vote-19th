import Link from 'next/link';

export default function VoteSelectPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-BG-black text-white">
      <main className="flex w-full flex-grow flex-col items-center justify-center px-4 pb-20">
        <h1 className="mb-8 text-center text-3xl font-bold">파트장 투표</h1>
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <Link href="/vote/front-end">
              <div className="flex h-40 w-40 cursor-pointer items-center justify-center rounded-lg border-2 border-main bg-BG-black text-center text-xl font-semibold hover:bg-main active:bg-main">
                FRONT-END
                <br />
                파트장 투표
              </div>
            </Link>
            <Link href="/vote/front-end/result">
              <button className="rounded-lg bg-main px-[3.12rem] py-2 text-white">결과 보기</button>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/vote/back-end">
              <div className="flex h-40 w-40 cursor-pointer items-center justify-center rounded-lg border-2 border-main bg-BG-black text-center text-xl font-semibold hover:bg-main active:bg-main">
                BACK-END
                <br />
                파트장 투표
              </div>
            </Link>
            <Link href="/vote/back-end/result">
              <button className="rounded-lg bg-main px-[3.12rem] py-2 text-white">결과 보기</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

import { FrontPartData } from '@/lib/data';

export default function FrontEndVote() {
  // const onClickVote = async (teamId: number) => {
  //   const token = localStorage.getItem('token') || '';
  //   try {
  //     const response = await voteAction(teamId, token);
  //     console.log(response);
  //   } catch (error) {
  //     console.error('투표 중 오류가 발생했습니다:', error);
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center bg-BG-black text-white">
      <main className="flex w-full flex-grow flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-center text-3xl font-bold">프론트 파트장 투표</h1>
        <div className="flex gap-12">
          <div className="flex flex-wrap justify-center gap-6 px-10">
            {FrontPartData.map((data) => (
              <div className="flex h-20 w-40 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-main bg-BG-black text-center hover:bg-main active:bg-main">
                <p className="text-xs text-gray-400">{data.team}</p>
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

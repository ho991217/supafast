import { ChzzkLiveListResponse } from '@/app/lives/chzzk/types';
import LiveCard from '../common/live-card';
import { root_path } from '@/utils/envConfig';

async function getChzzkLives(size: number) {
  const url = `${root_path}/lives/chzzk?size=${size}`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });
    const data: ChzzkLiveListResponse = await response.json();

    return data;
  } catch (error) {
    const e = error as Error;
    throw new Error(e.message);
  }
}

export default async function LiveChannels() {
  const data = await getChzzkLives(15);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-6 flex w-full items-center justify-between">
        <h1 className="text-lg font-bold">방송중인 채널</h1>
        <ul className="flex gap-4 text-sm font-bold text-neutral-400">
          <li>ALL</li>
          <li>SOOP</li>
          <li>YOUTUBE</li>
          <li className="text-supafast-primary">CHZZK</li>
        </ul>
      </div>
      <div className="grid grid-cols-5 place-items-start gap-x-[13px] gap-y-[19px]">
        {data.content.data.map((live) => (
          <LiveCard key={live.liveId} {...live} />
        ))}
      </div>
    </div>
  );
}

import type { ChzzkLiveListResponse } from '@app/lives/chzzk/types';
import { LiveCard } from '@components/common';
import { root_path } from '@utils/envConfig';
import Header from './header';

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
      <Header />
      <div className="grid grid-cols-5 place-items-start gap-x-[13px] gap-y-[19px]">
        {data.content.data.map((live) => (
          <LiveCard key={live.liveId} {...live} />
        ))}
      </div>
    </div>
  );
}

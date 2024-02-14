'use client';

import { ChzzkLive, ChzzkLiveListResponse } from '@/app/lives/chzzk/types';
import LiveCard from '../common/live-card';
import { useQuery } from '@tanstack/react-query';

interface LiveChannelsProps extends React.HTMLAttributes<HTMLDivElement> {
  expanded?: boolean;
}

async function getChzzkLives(size: number) {
  const url = `/lives/chzzk?size=${size}`;

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

export default function LiveChannels({ expanded = false }: LiveChannelsProps) {
  const {
    data: chzzk,
    isLoading,
    error,
  } = useQuery<ChzzkLiveListResponse>({
    queryKey: ['chzzkLives', expanded],
    queryFn: async () => {
      const response = await fetch(`/lives/chzzk?size=${expanded ? 15 : 5}`);
      return response.json();
    },
    refetchInterval: 60000,
  });

  if (error) throw error;

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
        {chzzk?.content.data.map((live) => (
          <LiveCard key={live.liveId} {...live} />
        ))}
      </div>
    </div>
  );
}

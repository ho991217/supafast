import React from 'react';
import type { ChzzkLiveListResponse } from '@/assets/types/chzzk-types';
import { LiveCard } from '@components/common';
import Header from './header';
import { URLSearchParams } from 'url';
import { YoutubeLiveResponse } from '@/assets/types/youtube-types';
import { useSearchParams } from 'next/navigation';
import { Platform } from '@/assets/types/common';
import { LiveCardProps } from '@/components/common/live-card';

async function getChzzkLives(size: number): Promise<ChzzkLiveListResponse> {
  'use server';
  const url = `https://api.chzzk.naver.com/service/v1/lives?size=${size}`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    const e = error as Error;
    throw new Error(e.message);
  }
}

async function getYoutubeLives(size: number): Promise<YoutubeLiveResponse> {
  'use server';
  const url = new URL('https://youtube.googleapis.com/youtube/v3/search');
  const params = new URLSearchParams({
    part: 'snippet',
    eventType: 'live',
    maxResults: size.toString(),
    regionCode: 'KR',
    relevanceLanguage: 'ko-KR',
    type: 'video',
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!,
    categoryId: '20',
  });

  url.search = params.toString();

  try {
    const response = await fetch(url.toString(), {
      next: {
        revalidate: 60,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    const e = error as Error;
    throw new Error(e.message);
  }
}

export default async function LiveChannels({
  platform,
}: {
  platform: Platform | 'ALL';
}) {
  const fetchVideos = async (size: number): Promise<LiveCardProps[]> => {
    if (platform === 'CHZZK') {
      const data = await getChzzkLives(size);
      return data.content.data.map((live) => ({
        title: live.liveTitle,
        channelName: live.channel.channelName,
        channelId: live.channel.channelId,
        thumbnailUrl: live.liveImageUrl,
        defaultThumbnailImageUrl: live.defaultThumbnailImageUrl,
        viewCount: live.accumulateCount,
        category: live.liveCategory,
        platform: 'CHZZK',
      }));
    } else if (platform === 'YOUTUBE') {
      const data = await getYoutubeLives(size);
      return data.items.map(({ snippet }) => ({
        title: snippet.title,
        channelName: snippet.channelTitle,
        channelId: snippet.channelId,
        thumbnailUrl: snippet.thumbnails.medium.url,
        defaultThumbnailImageUrl: snippet.thumbnails.default.url,
        platform: 'YOUTUBE',
      }));
    }
    return [];
  };

  const videos = await fetchVideos(15);

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="grid grid-cols-5 place-items-start gap-x-[13px] gap-y-[19px]">
        {videos.map((live) => (
          <LiveCard key={live.channelId} {...live} />
        ))}
      </div>
    </div>
  );
}

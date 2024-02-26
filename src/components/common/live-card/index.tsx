import React from 'react';
import { ChzzkLive } from '@/assets/types/chzzk-types';
import Image from 'next/image';
import Link from 'next/link';
import Badges from '../badges';
import AdultThumbnail from 'public/images/adult.webp';
import {
  YoutubeChannelResponse,
  YoutubeSnippet,
} from '@/assets/types/youtube-types';
import { Platform } from '@/assets/types/common';

async function getYoutubeChannelInfo(id: string) {
  'use server';
  const url = new URL('https://youtube.googleapis.com/youtube/v3/channels');
  const params = new URLSearchParams({
    id,
    part: 'snippet',
    fields: 'items/snippet/thumbnails/default',
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!,
  });

  url.search = params.toString();

  try {
    const response = await fetch(url.toString(), {
      next: {
        revalidate: 60,
      },
    });
    const data: YoutubeChannelResponse = await response.json();

    return data.items[0].snippet.thumbnails.default;
  } catch (error) {
    const e = error as Error;
    throw new Error(e.message);
  }
}

export type LiveCardProps = {
  adultContent?: boolean;
  thumbnailUrl: string;
  defaultThumbnailImageUrl?: string;
  channelId: ChzzkLive['channel']['channelId'] | YoutubeSnippet['channelId'];
  channelName:
    | ChzzkLive['channel']['channelName']
    | YoutubeSnippet['channelTitle'];
  channelImageUrl?: string;
  title: string;
  viewCount?: ChzzkLive['concurrentUserCount'];
  category?:
    | ChzzkLive['liveCategoryValue']
    | YoutubeSnippet['liveBroadcastContent'];
  platform: Platform;
};

export default async function LiveCard(live: LiveCardProps) {
  const parseLiveImageUrl = () => {
    if (live.adultContent) return AdultThumbnail;
    if (live.thumbnailUrl) {
      return live.thumbnailUrl.replace('{type}', '480');
    }

    return live.defaultThumbnailImageUrl ?? '';
  };

  const getChannelImageUrl = async () => {
    if (live.platform === 'CHZZK') {
      return live.channelImageUrl;
    } else if (live.platform === 'YOUTUBE') {
      return (await getYoutubeChannelInfo(live.channelId)).url;
    }
    return '';
  };

  const getLiveUrl = () => {
    if (live.platform === 'CHZZK') {
      return `https://chzzk.naver.com/live/${live.channelId}`;
    } else if (live.platform === 'YOUTUBE') {
      return `https://www.youtube.com/watch?v=${live.channelId}`;
    }
    return '';
  };

  const getChannelUrl = () => {
    if (live.platform === 'CHZZK') {
      return `https://chzzk.naver.com/${live.channelId}`;
    } else if (live.platform === 'YOUTUBE') {
      return `https://www.youtube.com/channel/${live.channelId}`;
    }
    return '';
  };

  const liveUrl = getLiveUrl();
  const channelUrl = getChannelUrl();
  const channelImageUrl = await getChannelImageUrl();

  return (
    <div className="group/card flex w-[272px] flex-col items-center justify-center gap-2 group-hover/card:bg-red-600">
      <Link href={liveUrl} className="relative overflow-hidden rounded-xl">
        <Badges className="absolute left-2 top-2">
          <Badges.Badge type={'LIVE'} />
          <Badges.Badge type={live.platform} />
        </Badges>
        <Image
          src={parseLiveImageUrl()}
          alt={live.title}
          width={272}
          height={153}
          className="bg-neutral-700"
        />
      </Link>
      <div className="flex w-full gap-3">
        <Link
          href={channelUrl}
          className="h-8 w-8 overflow-hidden rounded-full bg-neutral-700"
        >
          <Image
            src={channelImageUrl ?? ''}
            alt={live.channelName}
            width={32}
            height={32}
          />
        </Link>
        <div className="flex flex-1 flex-col gap-1">
          <Link
            className="max-h-[40px] overflow-hidden text-ellipsis text-sm font-medium hover:underline"
            href={liveUrl}
          >
            {live.title}
          </Link>
          <Link
            href={channelUrl}
            className="text-sm font-normal text-neutral-400 hover:underline"
          >
            {live.channelName}
          </Link>
          <div className="flex w-full items-center justify-start gap-2 text-xs">
            {live.viewCount && (
              <span className="text-sm font-normal text-neutral-400">
                {live.viewCount.toLocaleString()}명 시청중
              </span>
            )}
            {live.category && (
              <>
                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z"
                    fill="#A6A3A3"
                  />
                </svg>
                <span className="max-w-[100px] overflow-hidden text-ellipsis text-sm font-normal text-neutral-400 ">
                  {live.category}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { default as LiveCardSkeleton } from './live-card-skeleton';

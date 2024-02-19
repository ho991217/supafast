import React from 'react';
import { ChzzkLive } from '@app/lives/chzzk/types';
import Image from 'next/image';
import Link from 'next/link';
import Badges from '../badges';
import AdultThumbnail from 'public/images/adult.webp';

export type Platform = 'SOOP' | 'YOUTUBE' | 'CHZZK';

type LiveCardProps = ChzzkLive;

export default function LiveCard(live: LiveCardProps) {
  const parseLiveImageUrl = () => {
    if (live.adult) return AdultThumbnail;
    if (live.liveImageUrl) {
      return live.liveImageUrl.replace('{type}', '480');
    }

    return live.defaultThumbnailImageUrl ?? '';
  };

  const liveUrl = `https://chzzk.naver.com/live/${live.channel.channelId}`;
  const channelUrl = `https://chzzk.naver.com/${live.channel.channelId}`;

  return (
    <div className="group/card flex w-[272px] flex-col items-center justify-center gap-2 group-hover/card:bg-red-600">
      <Link href={liveUrl} className="relative overflow-hidden rounded-xl">
        <Badges className="absolute left-2 top-2">
          <Badges.Badge type={'LIVE'} />
          <Badges.Badge type={'CHZZK'} />
        </Badges>
        <Image
          src={parseLiveImageUrl()}
          alt={live.liveTitle}
          width={272}
          height={153}
        />
      </Link>
      <div className="flex w-full gap-3">
        <Image
          src={live.channel.channelImageUrl}
          alt={live.channel.channelName}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full"
        />
        <div className="flex flex-1 flex-col gap-1">
          <Link className="text-sm font-medium hover:underline" href={liveUrl}>
            {live.liveTitle}
          </Link>
          <Link
            href={channelUrl}
            className="text-sm font-normal text-neutral-400 hover:underline"
          >
            {live.channel.channelName}
          </Link>
          <div className="flex w-full items-center justify-start gap-2 text-xs">
            <span className="text-sm font-normal text-neutral-400">
              {live.concurrentUserCount.toLocaleString()}명 시청중
            </span>
            {live.liveCategory && (
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
            )}
            <span className="text-sm font-normal text-neutral-400">
              {live.liveCategoryValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { default as LiveCardSkeleton } from './live-card-skeleton';

'use client';

import { useQuery } from '@tanstack/react-query';
import { lazy } from 'react';
import MainSearch from '../components/home/main-search';
import LiveChannels from '../components/home/live-channels';
import { ChzzkLiveListResponse } from './lives/chzzk/types';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start">
      <MainSearch />
      <Suspense fallback={<Loading />}>
        <LiveChannels />
      </Suspense>
    </main>
  );
}

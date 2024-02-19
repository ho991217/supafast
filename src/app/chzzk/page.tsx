import React from 'react';
import { Suspense } from 'react';
import { LiveChannels } from '@components/home';
import Loading from './loading';
import Header from '@components/home/live-channels/header';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start">
      <Header currentPath="chzzk" />
      <Suspense fallback={<Loading />}>
        <LiveChannels platform="CHZZK" />
      </Suspense>
    </main>
  );
}

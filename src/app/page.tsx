import { Suspense } from 'react';
import { MainSearch, LiveChannels } from '@components/home';
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

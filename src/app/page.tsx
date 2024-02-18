import { Suspense } from 'react';
import { LiveChannels } from '@components/home';
import Loading from './loading';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start">
      <Suspense fallback={<Loading />}>
        <LiveChannels />
      </Suspense>
    </main>
  );
}

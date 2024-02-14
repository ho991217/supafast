import LiveChannels from '../components/home/live-channels';
import MainSearch from '../components/home/main-search';

export default async function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start">
      <MainSearch />
      <LiveChannels expanded />
    </main>
  );
}

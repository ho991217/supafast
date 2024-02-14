import MainSearch from './components/home/main-search';
import { type LiveListResponse } from './lives/chzzk/types';

async function getChzzkLives(size: number = 5) {
  'use server';
  const url = `http://localhost:3000/lives/chzzk?size=${size}`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });
    const data: LiveListResponse = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    const e = error as Error;
    throw new Error(e.message);
  }
}

export default async function Home() {
  const chzzk = await getChzzkLives();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start">
      <MainSearch />
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-10 text-4xl font-bold">Live List</h1>
        <ul>
          {chzzk.content.data.map((live) => (
            <li key={live.liveId}>{live.liveTitle}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

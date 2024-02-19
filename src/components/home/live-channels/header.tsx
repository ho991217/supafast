import { Category } from '@/assets/types/common';
import clsx from 'clsx';
import Link from 'next/link';

export type CurrentPath = Lowercase<Category>;

export default function Header({ currentPath }: { currentPath: CurrentPath }) {
  return (
    <div className="mb-6 flex w-[1412px] items-center justify-between">
      <h1 className="text-lg font-bold">방송중인 채널</h1>
      <ul className="flex gap-4 text-sm font-bold text-neutral-400">
        <li className={clsx(currentPath === 'all' && 'text-supafast-primary')}>
          <Link href="/">ALL</Link>
        </li>
        <li className={clsx(currentPath === 'soop' && 'text-supafast-primary')}>
          <Link href="/soop">SOOP</Link>
        </li>
        <li
          className={clsx(currentPath === 'youtube' && 'text-supafast-primary')}
        >
          <Link href="/youtube">YOUTUBE</Link>
        </li>
        <li
          className={clsx(currentPath === 'chzzk' && 'text-supafast-primary')}
        >
          <Link href="/chzzk">CHZZK</Link>
        </li>
      </ul>
    </div>
  );
}

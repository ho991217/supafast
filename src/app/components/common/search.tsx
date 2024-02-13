import clsx from 'clsx';
import Magnifier from 'public/icons/magnifier.svg';
import { HTMLAttributes } from 'react';

interface SearchProps extends HTMLAttributes<HTMLDivElement> {}

export default function Search({ className, ...props }: SearchProps) {
  return (
    <div
      className={clsx(
        'relative flex items-center rounded-full border-[1px] border-neutral-400',
        className,
      )}
    >
      <input
        type="search"
        placeholder="스트리머, 카테고리 검색"
        className="h-[54px] w-[691px] flex-1 bg-transparent pl-6 text-lg font-bold text-white placeholder-neutral-400 focus:outline-none active:outline-none"
      />
      <button className="absolute right-6">
        <Magnifier />
      </button>
    </div>
  );
}

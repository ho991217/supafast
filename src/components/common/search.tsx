import clsx from 'clsx';
import Magnifier from 'public/icons/magnifier.svg';
import { HTMLAttributes } from 'react';

interface SearchProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'lg';
}

export default function Search({
  className,
  size = 'lg',
  ...props
}: SearchProps) {
  return (
    <div
      className={clsx(
        'relative flex items-center rounded-full border-[1px] border-neutral-400',
        className,
      )}
      {...props}
    >
      <input
        type="text"
        placeholder="스트리머, 카테고리 검색"
        className={clsx(
          'flex-1 bg-transparent text-white placeholder-neutral-400 focus:outline-none active:outline-none',
          size === 'lg' && 'h-[54px] w-[691px] pl-6 text-lg font-bold',
          size === 'sm' && 'h-[45px] w-[58px] pl-[18px] text-base font-medium',
        )}
      />
      <button className="absolute right-6">
        <Magnifier />
      </button>
    </div>
  );
}

import React from 'react';
import { Skeleton as DefaultSkeleton } from '@components/common';
import Badges from '../badges';

export default function Skeleton() {
  return (
    <div className="group/card flex w-[272px] flex-col items-center justify-center gap-2 group-hover/card:bg-red-600">
      <div className="relative overflow-hidden rounded-xl">
        <Badges className="absolute left-2 top-2">
          <Badges.Badge type={'LOADING'} />
        </Badges>
        <DefaultSkeleton className="h-[153px] w-[272px]" />
      </div>
      <div className="flex w-full gap-3">
        <DefaultSkeleton className="h-8 w-8 rounded-full" />
        <div className="flex flex-1 flex-col gap-1">
          <DefaultSkeleton className="mb-[11px] h-9 w-52" />
          <DefaultSkeleton className="mb-[11px] h-4 w-[62px]" />
          <DefaultSkeleton className="h-[14px] w-[151px]" />
        </div>
      </div>
    </div>
  );
}

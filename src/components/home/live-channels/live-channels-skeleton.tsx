import React from 'react';
import { LiveCardSkeleton } from '@components/common';

export default async function Skeleton() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-5 place-items-start gap-x-[13px] gap-y-[19px]">
        {Array.from({ length: 15 }).map((_, index) => (
          <LiveCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

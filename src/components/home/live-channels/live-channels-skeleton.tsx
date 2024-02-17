import { LiveCardSkeleton } from '@components/common';
import Header from './header';

export default async function LiveChannelsSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="grid grid-cols-5 place-items-start gap-x-[13px] gap-y-[19px]">
        {Array.from({ length: 15 }).map((_, index) => (
          <LiveCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

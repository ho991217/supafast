import clsx from 'clsx';
import { HTMLAttributes } from 'react';

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export default function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={clsx('animate-pulse bg-neutral-700', className)}
      {...props}
    />
  );
}

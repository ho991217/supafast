import React from 'react';
import clsx from 'clsx';
import { Platform } from './live-card';

type BadgeType = 'LIVE' | 'OFFLINE' | 'VOD' | Platform | 'LOADING';

interface BadgesProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Badges({ className, children, ...props }: BadgesProps) {
  return (
    <div
      className={clsx('z-10 flex items-center justify-start gap-1', className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  type: BadgeType;
}

function Badge({ type, className, ...props }: BadgeProps) {
  const generateBadgeColor = () => {
    switch (type) {
      case 'LIVE':
        return 'bg-supafast-primary text-black';
      case 'OFFLINE':
        return 'bg-neutral-700 text-black';
      case 'VOD':
        return 'bg-supafast-secondary text-black';
      case 'SOOP':
        return 'bg-[#C8FF00] text-black';
      case 'YOUTUBE':
        return 'bg-[#FF0000] text-black';
      case 'CHZZK':
        return 'bg-[#00FF9A] text-black';
      default:
        return 'bg-neutral-500 text-black';
    }
  };
  if (type === 'LOADING')
    return <div className="h-[23px] w-[95px] rounded-[4px] bg-neutral-900" />;

  return (
    <div
      className={clsx(
        'rounded-[4px] px-1 py-[1px] text-sm font-bold',
        generateBadgeColor(),
        className,
      )}
      {...props}
    >
      {type}
    </div>
  );
}

Badges.Badge = Badge;

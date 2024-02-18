import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  navigateOnLogoClick?: boolean;
  className?: string;
  size?: 'sm' | 'lg';
}

export default function Logo({
  className,
  navigateOnLogoClick,
  size = 'lg',
}: LogoProps) {
  return (
    <Link
      href={navigateOnLogoClick ? '/' : '#'}
      className={clsx(
        'flex items-center space-x-2',
        navigateOnLogoClick ? 'pointer-events-auto' : 'pointer-events-none',
        className,
      )}
      aria-disabled={!navigateOnLogoClick}
      tabIndex={navigateOnLogoClick ? undefined : -1}
    >
      <Image
        src="/logo.webp"
        alt="Supafast"
        width={size === 'lg' ? 630 : 110}
        height={size === 'lg' ? 172 : 33}
      />
    </Link>
  );
}

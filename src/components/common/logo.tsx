import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  navigateOnLogoClick?: boolean;
  className?: string;
}

export default function Logo({ className, navigateOnLogoClick }: LogoProps) {
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
      <Image src="/logo.webp" alt="Supafast" width={630} height={172} />
    </Link>
  );
}

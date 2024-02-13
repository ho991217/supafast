import clsx from 'clsx';
import Image from 'next/image';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Logo({ className, ...props}: LogoProps) {
  return (
    <div className={clsx('flex items-center space-x-2', className)}>
      <Image src='/logo.webp' alt='Supafast' width={630} height={172} />
    </div>
  );
}

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Providers from './providers';
import { Header, SideBar } from '@components/common';
import clsx from 'clsx';

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Supafast: 비디오 콘텐츠 서브 플랫폼',
  description: '내가 즐겨보는 스트리머는 어디로 이적했을까? 정답은 여기에!',
  openGraph: { images: './opengraph-image.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className={clsx(pretendard.className, 'overflow-hidden')}>
        <Providers>
          <div className="w-full">
            <Header />
            <div className="flex">
              <SideBar />
              <div className="flex-1">{children}</div>
            </div>
          </div>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

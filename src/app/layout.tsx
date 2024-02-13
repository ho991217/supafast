import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Supafast: 비디오 콘텐츠 서브 플랫폼',
  description: '내가 즐겨보는 스트리머는 어디로 이적했을까? 정답은 여기에!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className={pretendard.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

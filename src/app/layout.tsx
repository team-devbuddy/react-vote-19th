import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import RecoilProvider from '@/components/layout/RecoilProvider'; // 추가

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'beatBuddy vote',
  description: '19th beatBuddy vote',
  icons: {
    icon: '/logo.png',
  },
};

const pretendard = localFont({
  src: '../lib/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={`${pretendard.className}`}>
        <RecoilProvider>
          {/* Full Container */}
          <div className="flex h-full w-full items-center justify-center">
            {/* Mobile Container */}
            <div className="flex h-screen w-full max-w-[600px] flex-col bg-BG-black">
              <Header />
              {/* Content */}
              <div className="flex flex-1 items-center justify-center">{children}</div>
              {/* <Footer /> */}
            </div>
          </div>
        </RecoilProvider>
      </body>
    </html>
  );
}

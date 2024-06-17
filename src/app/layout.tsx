import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '../components/layout/Header';

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
      <body className={pretendard.className}>
        {/* FUll CONTAINER */}
        <div className="flex h-screen w-full items-center justify-center">
          {/* Mobile Container */}
          <div className="flex h-screen min-w-[600px] flex-col bg-gray-100">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

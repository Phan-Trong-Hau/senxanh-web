import type { Metadata } from 'next';
import '../styles/globals.css'

import { Geist, Geist_Mono } from 'next/font/google'

import { AntdRegistry } from '@ant-design/nextjs-registry'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sen Xanh',
  description:
    'Sen Xanh cung cấp hóa học này tập trung vào việc phát triển các kỹ năng quan trọng như giao tiếp, kỹ nắng sinh tồn, giải quyết vấn đề và ra quyết định, cũng như khả năng tự chủ và làm việc nhóm.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}

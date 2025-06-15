import type { Metadata } from "next";
import "./globals.css";
import { Inter, Kodchasan } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const kodchasan = Kodchasan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kodchasan',
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Henry's React App",
  description: "My first clean React page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${kodchasan.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
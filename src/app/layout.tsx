import type { Metadata } from 'next';
import Link from 'next/link';
// import localFont from "next/font/local";
import './globals.css';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: 'Notes App',
  description: 'Notes App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className='bg-gray-800 text-white p-4'>
          <div className='container mx-auto flex justify-between items-center'>
            <Link href="/" className='text-xl font-bold'>Notes App</Link>
            <div className='space-x-4'>
              <Link href="/notes">Notes</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/error-page">Error</Link>
            </div>
          </div>
        </nav>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}

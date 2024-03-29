import type { Metadata } from "next";
import './main.scss'
import { Open_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const openSans = Open_Sans({subsets:['hebrew']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={openSans.className} lang="en">
      <body data-bs-theme="dark">{children}</body>
    </html>
  );
}

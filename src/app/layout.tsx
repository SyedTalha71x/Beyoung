import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../app/Components/Header/page'
import Topheader from '../app/Components/Topheader/page'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beyoung Clothing Store",
  description: "Beyoung is an American Clothing Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topheader />
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../app/Components/Header/page'
import TopHeader from '../app/Components/Topheader/page'
import Footer from '../app/Components/Footer/page'

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
        <TopHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

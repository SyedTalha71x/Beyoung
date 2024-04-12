import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../app/Components/Header/page'
import Footer from '../app/Components/Footer/page'
import StoreState from '../app/Context/StoreState'

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
    <StoreState>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoreState>
  );
}

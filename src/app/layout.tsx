import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '700', '900'], style: ['normal', 'italic'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Discover and book the best hotel rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="font-normal">
          <Header />
          {children}
          <Footer />
          </main>
        </body>
    </html>
  );
}

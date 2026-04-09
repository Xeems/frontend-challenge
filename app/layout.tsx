import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ["latin", 'cyrillic'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Cats app",
  description: "Created by xeems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Header/>
        {children}
        </body>
    </html>
  );
}

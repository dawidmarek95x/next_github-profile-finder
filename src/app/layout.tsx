"use client";
import { Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-dark-subtle`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

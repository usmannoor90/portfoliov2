import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import CustomCircle from "../components/CustomCircle";
import CustomHead from "../components/CustomHead";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CustomCircle />
        <CustomHead />
      </body>
    </html>
  );
}

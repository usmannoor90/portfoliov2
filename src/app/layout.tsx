import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import CustomCircle from "../components/CustomCircle";

export const metadata: Metadata = {
  title: "M Usman Noor",
};

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
      </body>
    </html>
  );
}

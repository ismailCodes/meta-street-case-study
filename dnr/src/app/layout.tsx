"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import "./globals.css";

const client = new Client({
  url: "https://api.studio.thegraph.com/query/31830/metastreet-v2-sepolia/version/latest",
  exchanges: [cacheExchange, fetchExchange],
});
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider value={client}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}

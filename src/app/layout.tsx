import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/Code/globals.css";
import TopBar from "@/Code/components/Header&Nav/TopBar";
import { ContextProvider } from "@/Code/typescript/contexts/Provider";
import Header from "@/Code/components/Header&Nav/Header";
import BackTopBtn from "@/Code/components/utilities/BackTopBtn";
import { AOSInit } from "@/Code/components/AOS/AOSInit";
import Footer from "@/Code/components/Header&Nav/Footer";
export const metadata: Metadata = {
  title: "Downtown Bistro",
  description: "Award winning diner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <AOSInit />
        <ContextProvider>
          <TopBar />
          <Header />
          {children}
          <Footer/>
          <BackTopBtn />
        </ContextProvider>
      </body>
    </html>
  );
}

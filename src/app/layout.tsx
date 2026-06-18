import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/Code/globals.css";
import TopBar from "@/Code/components/Header&Nav/TopBar";
import { ContextProvider } from "@/Code/typescript/contexts/Provider";
import Header from "@/Code/components/Header&Nav/Header";
import BackTopBtn from "@/Code/components/utilities/BackTopBtn";
import { AOSInit } from "@/Code/components/AOS/AOSInit";
import Footer from "@/Code/components/Header&Nav/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Downtown Bistro",
  description: "Award-winning diner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
        <AOSInit />
        <ContextProvider>
          <TopBar />
          <Header />
          {children}
          <Footer />
          <BackTopBtn />
        </ContextProvider>
      </body>
    </html>
  );
}

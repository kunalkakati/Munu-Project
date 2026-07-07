import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Namita's Little Bakehouse | Home-baked Cakes in Guwahati",
  description:
    "Bento cakes, jar cakes, and celebration cakes baked fresh to order in Guwahati, Assam. Order in minutes on WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Quissett Landing — Woods Hole, Cape Cod",
    template: "%s | The Quissett Landing",
  },
  description:
    "A historic home on the shores of Quissett Harbor. Twelve guests, four bedrooms, and a bunk room made for memories. Book direct.",
  keywords: ["Cape Cod vacation rental", "Woods Hole rental", "Quissett Harbor", "Falmouth MA vacation home"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thequissettlanding.com",
    siteName: "The Quissett Landing",
    title: "The Quissett Landing — Woods Hole, Cape Cod",
    description: "A historic home on the shores of Quissett Harbor. Twelve guests, four bedrooms, and a bunk room made for memories.",
    images: [
      {
        url: "https://thequissettlanding.com/_assets/media/c4bf1db69652b7548e7fff1fbbae7a63.jpg",
        width: 1200,
        height: 630,
        alt: "The Quissett Landing exterior",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ backgroundColor: "#F4EFE6", color: "#1A1A18" }}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

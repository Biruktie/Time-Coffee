import "./globals.css";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";

// Title / Logo font
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

// Body font
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Optional fancy script for special occasions
export const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-script",
});

export const metadata = {
  title: "Time Coffee — Café & Bakery",
  description: "A warm, modern café sample website built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${script.variable}`}
    >
      <body className="font-inter bg-white text-gray-900">{children}</body>
    </html>
  );
}

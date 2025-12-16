// app/layout.js
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
  title: "Time Coffee - Premium Café Experience",
  description: "Fresh coffee, cozy atmosphere, and handcrafted flavors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

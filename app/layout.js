import { Tangerine } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "@/components/Footer";

const inter = Tangerine({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Tamia's Beauty Parlour",
  description:
    "Elevate your senses, embrace serenity, and unlock the radiant beauty the lies within ;)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

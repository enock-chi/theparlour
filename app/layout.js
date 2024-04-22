import { Tangerine } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

const inter = Tangerine({ subsets: ["latin"], weight: ['400', '700']});

export const metadata = {
  title: "Tamia's Beauty Parlour",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

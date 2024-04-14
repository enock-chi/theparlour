import { Tajawal } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Tajawal({ subsets: ["latin"], weight: ['200', '300', '400', '500', '700', '800', '900']});

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
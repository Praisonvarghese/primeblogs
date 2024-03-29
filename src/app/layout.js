import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PrimeBlogs",
  description: "Prime Blogs from Tech Prime Malayalam",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div style={{ marginTop: "45px"}}>
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

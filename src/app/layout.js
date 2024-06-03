import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "./providers";
import Ticker from "@/components/layout/Ticker";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Ticker/>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}

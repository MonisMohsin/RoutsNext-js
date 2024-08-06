import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "./appbar/page";
import Header from '../components/header/page'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add any <head> elements here */}
       
      </head>
      
      <body className={inter.className}>
        <ResponsiveAppBar/>
     
      <Header/>
      
        {children}
        
      </body>
    </html>
  );
}

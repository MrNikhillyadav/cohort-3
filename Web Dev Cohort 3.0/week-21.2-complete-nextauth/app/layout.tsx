import type { Metadata } from "next";
import "./globals.css";
import Navbar from './../components/Navbar';

export const metadata: Metadata = {
  title: "nextAuth",
  description: "Complete nextAuth.js authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
            <Navbar/>
            {children}
      </body>
    </html>
  );
}

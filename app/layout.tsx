import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";

const gopher = localFont({
  src: "../public/gopher.otf",
  variable: "--font-gopher",
  
});

const tattosWishe = localFont({
  src: "../public/tatto.otf",
  variable: "--font-tattos-wishe",
});


export const metadata: Metadata = {
  title: "Dr. Maya Reynolds.",
  description: "Licensed Clinical Psychologist (Fictional Therapist)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gopher.variable} ${tattosWishe.variable} `}
      >
        {children}
      </body>
    </html>
  );
}

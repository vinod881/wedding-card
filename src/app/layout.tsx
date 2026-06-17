import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wedding Invitation | Veeresh & Supriya",
  description: "Join us in celebrating the love and union of Veeresh & Supriya. Save the dates and RSVP.",
  keywords: ["wedding invitation", "Veeresh and Supriya", "wedding site", "RSVP wedding"],
  openGraph: {
    images: ["https://i.pinimg.com/736x/24/7a/84/247a8472ced66b9fa7523d46ba2d8f34.jpg"],
  },
  icons: {
    icon: "https://i.pinimg.com/736x/24/7a/84/247a8472ced66b9fa7523d46ba2d8f34.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="bg-cream-50 text-stone-900 font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

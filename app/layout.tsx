import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pragatee Kitchen | Authentic Home-Style Biryani in Hyderabad",
  description: "Experience the taste of home at Pragatee Kitchen. Rated 4.7 stars for our delicious Chicken Biryani, Curries, and hygienic home-style quality.",
  keywords: ["Pragatee Kitchen", "Hyderabad Biryani", "Home style food", "Best Biryani in Pragathi Nagar", "Authentic Indian Cuisine"],
  openGraph: {
    title: "Pragatee Kitchen - Quality in Every Bite",
    description: "Rated 4.7 stars. Authentic home-style Biryani and Curries in Hyderabad.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}

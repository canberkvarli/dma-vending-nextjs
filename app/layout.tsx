import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DMA Healthy Vending | Workplace Wellness Solutions",
  description: "Are your employees tired of junk food-only vending machines at work? DMA Healthy Vending provides healthy, natural or low-calorie food and beverage options. All without any cost or long-term commitment to your company.",
  keywords: ["healthy vending", "workplace wellness", "healthy snacks", "vending machines", "California", "Danville"],
  authors: [{ name: "DMA Healthy Vending" }],
  openGraph: {
    title: "DMA Healthy Vending | Workplace Wellness Solutions",
    description: "Healthy vending solutions for your workplace. No cost or long-term commitment.",
    type: "website",
    locale: "en_US",
    siteName: "DMA Healthy Vending",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light">
      <body className={`${inter.variable} ${hand.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
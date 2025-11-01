import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} font-sans antialiased bg-cream`}>
        {children}
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dmahealthyvending.com'),
  title: {
    default: "DMA Healthy Vending | Healthy Vending Solutions",
    template: "%s | DMA Healthy Vending",
  },
  description: "Are you tired of junk food-only vending machines? DMA Healthy Vending provides healthy, natural or low-calorie food and beverage options for gyms, schools, and facilities. All without any cost or long-term commitment to you.",
  keywords: ["healthy vending", "gym vending", "school vending", "healthy snacks", "vending machines", "California", "Danville", "healthy food vending", "wellness", "student vending"],
  authors: [{ name: "DMA Healthy Vending" }],
  creator: "DMA Healthy Vending",
  publisher: "DMA Healthy Vending",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "DMA Healthy Vending",
    title: "DMA Healthy Vending | Healthy Vending Solutions",
    description: "Healthy vending solutions for gyms, schools, and facilities. No cost or long-term commitment. Providing nutritious snacks and beverages throughout California.",
    images: [
      {
        url: "/logo-dma.png",
        width: 1200,
        height: 630,
        alt: "DMA Healthy Vending - Healthy Vending Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DMA Healthy Vending | Healthy Vending Solutions",
    description: "Healthy vending solutions for gyms, schools, and facilities. No cost or long-term commitment.",
    images: ["/logo-dma.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#10b981' },
    { media: '(prefers-color-scheme: dark)', color: '#10b981' },
  ],
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
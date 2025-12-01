import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import { Be_Vietnam_Pro, Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Berabank - The Complete Crypto Bank",
  description:
    "The first crypto card built natively on Berachain. International card with fiat balance, investment piggy banks, yield via Infrared Finance and much more.",
  keywords: [
    "berabank",
    "berachain",
    "crypto card",
    "crypto banking",
    "honey",
    "infrared finance",
    "proof of liquidity",
    "web3",
    "decentralized finance",
  ],
  authors: [{ name: "Berabank Team" }],
  creator: "Berabank",
  publisher: "Berabank",
  robots: "index, follow",
  openGraph: {
    title: "Berabank - The Complete Crypto Bank",
    description:
      "The first crypto card built natively on Berachain. Complete banking experience with crypto.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berabank - The Complete Crypto Bank",
    description:
      "The first crypto card built natively on Berachain. Complete banking experience with crypto.",
  },
  icons: {
    icon: [
      { url: "/logo_icon.png", sizes: "64x64", type: "image/png" },
      { url: "/logo_icon.png", sizes: "192x192", type: "image/png" },
      { url: "/logo_icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo_icon.png", sizes: "180x180", type: "image/png" }],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth antialiased ${sora.variable} ${beVietnamPro.variable}`}
    >
      <head>
        <link rel="icon" href="/logo_icon.png" />
      </head>
      <body>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1d224b",
              color: "#ffffff",
              border: "1px solid rgba(65, 174, 196, 0.3)",
            },
            success: {
              iconTheme: {
                primary: "#41aec4",
                secondary: "#ffffff",
              },
            },
            error: {
              iconTheme: {
                primary: "#e5484d",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}

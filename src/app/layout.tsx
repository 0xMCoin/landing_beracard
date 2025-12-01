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
  title: "BeraCard - O Banco Cripto Completo",
  description:
    "O primeiro cartão cripto construído nativamente na Berachain. Cartão internacional com saldo em fiat, caixinhas de investimento, rendimento via Infrared Finance e muito mais.",
  keywords: [
    "beracard",
    "berachain",
    "crypto card",
    "cartão cripto",
    "honey",
    "infrared finance",
    "proof of liquidity",
    "web3",
    "decentralized finance",
  ],
  authors: [{ name: "BeraCard Team" }],
  creator: "BeraCard",
  publisher: "BeraCard",
  robots: "index, follow",
  openGraph: {
    title: "BeraCard - O Banco Cripto Completo",
    description:
      "O primeiro cartão cripto construído nativamente na Berachain. Experiência bancária completa com cripto.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeraCard - O Banco Cripto Completo",
    description:
      "O primeiro cartão cripto construído nativamente na Berachain. Experiência bancária completa com cripto.",
  },
  icons: {
    icon: [
      { url: "/images/logo.PNG", sizes: "64x64", type: "image/png" },
      { url: "/images/logo.PNG", sizes: "192x192", type: "image/png" },
      { url: "/images/logo.PNG", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.PNG", sizes: "180x180", type: "image/png" }],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`scroll-smooth antialiased ${sora.variable} ${beVietnamPro.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/logo.PNG" />
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


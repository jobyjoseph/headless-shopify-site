import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headless Shopify site",
  description: "Recreating dawn theme using headless",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO: lang="{{ request.locale.iso_code }}"
    <html className="js" lang="en">
      <head>
        {/* TODO: Add <meta http-equiv="X-UA-Compatible" content="IE=edge"> */}
        {/* TODO: Dynamic canonical url<link rel="canonical" href="{{ canonical_url }}"/> */}
        {/* TODO: show favicon from settings <link rel="icon" type="image/png" href="{{ settings.favicon | image_url: width: 32, height: 32 }}"></link> */}
        {/* TODO: preconnect if settings.type_header_font.system? and settings.type_body_font.system? <link rel="preconnect" href="https://fonts.shopifycdn.com" crossorigin/> */}
        {/* TODO: Load social meta tags */}
        <Script src="/scripts/constants.js" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

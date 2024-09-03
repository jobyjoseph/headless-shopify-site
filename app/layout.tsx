import type { Metadata } from "next";
import "@/assets/base.scss";
import "./globals.scss";
import Script from "next/script";

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
        <Script src="/scripts/pubsub.js" />
        <Script src="/scripts/global.js" />
        <Script src="/scripts/animations.js" />
      </head>
      <body className="gradient">
        <a
          className="skip-to-content-link button visually-hidden"
          href="#MainContent"
        >
          Skip to content
        </a>
        <main
          id="MainContent"
          className="content-for-layout focus-none"
          role="main"
          tabIndex={-1}
        >
          {children}
        </main>
      </body>
    </html>
  );
}

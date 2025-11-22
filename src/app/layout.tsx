/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blip - The Simplest Bulk Ad Uploader for Meta",
  description:
    "Launch 100s of ads together. Unlimited Ad Accounts. Save your settings and launch ads in seconds.",
  keywords: "Meta ads, Facebook ads, bulk upload, ad management, advertising",
  // Remove themeColor from here

  openGraph: {
    title: "Blip - The Simplest Bulk Ad Uploader for Meta",
    description:
      "Launch 100s of ads together. Unlimited Ad Accounts. Save your settings and launch ads in seconds.",
    url: "https://withblip.com",
    siteName: "Blip",
    images: [
      {
        url: "https://withblip.com/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Landing page preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blip - The Simplest Bulk Ad Uploader for Meta",
    description:
      "Launch 100s of ads together. Unlimited Ad Accounts. Save your settings and launch ads in seconds.",
    images: ["https://withblip.com/images/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s);
              j.async=true;
              j.src="https://abc.withblip.com/2o5tdquyuhs.js?4mnyr=GgxIPiE8ST8nIyE3Nj8jUgVVR1dEVwAaTh8cDR0TCB0DRhYWGA%3D%3D";
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','4mnyr=GgxIPiE8ST8nIyE3Nj8jUgVVR1dEVwAaTh8cDR0TCB0DRhYWGA%3D%3D');`,
          }}
        ></script>
        {/* End Google Tag Manager */}

        <link
          rel="preload"
          href="/fonts/NexaRound/subset-NexaRound-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NexaRound/subset-NexaRound-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NexaRound/subset-NexaRound-Heavy.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://abc.withblip.com/ns.html?id=GTM-KTKTNCNG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}

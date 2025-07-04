import "@progress/kendo-theme-default/dist/all.css";
import "@progress/kendo-theme-utils/dist/all.css";
import "./globals.css";
import { Metadata } from "next";

export const metadata = {
  title: "Svitlana Horodylova",
  description: "Portfolio of dashboard projects",
  openGraph: {
    title: "Svitlana Horodylova",
    description: "Portfolio of dashboard projects",
    images: [
      {
        url: "/photo-1.png",
        width: 1200,
        height: 630,
        alt: "Svitlana Horodylova"
      }
    ],
    locale: "en_US",
    type: "website",
    siteName: "Svitlana Horodylova Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Svitlana Horodylova",
    description: "Portfolio of dashboard projects",
    images: ["/photo-1.png"],
    creator: "@svitlanahorodylova"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

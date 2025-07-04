import "@progress/kendo-theme-default/dist/all.css";
import "@progress/kendo-theme-utils/dist/all.css";
import "./globals.css";
import { Metadata } from "next";

export const metadata = {
  title: "Svitlana Horodylova",
  description: "Happy to discuss the dashboard details and your key requirements during the call",
  openGraph: {
    title: "Svitlana Horodylova",
    description: "Happy to discuss the dashboard details and your key requirements during the call",
    images: [
      {
        url: "/photo-1.png",
        width: 1200,
        height: 630,
        alt: "Svitlana Horodylova"
      }
    ],
    locale: "en_UK",
    type: "website",
    siteName: "Svitlana Horodylova Portfolio"
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

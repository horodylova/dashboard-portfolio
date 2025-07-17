import "@progress/kendo-theme-default/dist/all.css";
import "@progress/kendo-theme-utils/dist/all.css";
import "./globals.css";

export const metadata = {
  title: "Svitlana Horodylova",
  description: "Interactive dashboards and data visualization solutions for businesses",
  openGraph: {
    title: "Svitlana Horodylovaportfolio",
    description: "Interactive dashboards and data visualization solutions for businesses",
    images: [
      {
        url: "/portfolio-new.png?v=1",
        width: 1200,
        height: 630,
        alt: "Svitlana Horodylova"
      }
    ],
    locale: "en_UK",
    type: "website",
    siteName: "Dashboard Developer"
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

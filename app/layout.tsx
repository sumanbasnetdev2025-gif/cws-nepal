import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complete Web Solutions Nepal | Professional Web & Digital Services",
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Complete Web Solutions Nepal delivers cutting-edge web development, digital marketing, SEO, mobile apps, and IT solutions for businesses across Nepal and beyond.",
  keywords:
    "web development Nepal, digital marketing Nepal, SEO Nepal, mobile app development, IT solutions Nepal, CWS Nepal",
  authors: [{ name: "Complete Web Solutions Nepal" }],
  openGraph: {
    title: "Complete Web Solutions Nepal",
    description: "Professional Web & Digital Services in Nepal",
    type: "website",
    locale: "en_US",
    
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

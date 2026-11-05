import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { site, contact } from "@/data/content";

const inter = Inter_Tight({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  authors: [{ name: site.name }],
  keywords: ["Product Manager", "Associate Product Manager", "Business Analyst", "HR-tech", "Payroll", "Neeyamo", "IIT Palakkad"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
  icons: { icon: "/icon.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: site.themeColor };

// Set theme before paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        url: site.url,
        image: `${site.url}${site.ogImage}`,
        description: site.description,
        jobTitle: "Management Trainee",
        email: `mailto:${contact.email}`,
        worksFor: { "@type": "Organization", name: "Neeyamo" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Palakkad" },
        knowsAbout: site.knowsAbout,
        sameAs: [contact.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#person` },
      },
    ],
  };
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">{children}
        <Analytics />
      </body>
    </html>
  );
}

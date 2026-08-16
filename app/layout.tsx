import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import NotebookFrame from "./components/NotebookFrame";
import {
  description,
  email,
  fullName,
  githubUrl,
  jobTitle,
  linkedInUrl,
  siteUrl,
  twitterHandle,
  twitterUrl,
} from "./data/identity";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${fullName} — ${jobTitle}`,
    template: `%s — ${fullName}`,
  },
  description,
  authors: [{ name: fullName, url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${fullName} — ${jobTitle}`,
    description,
    url: "/",
    siteName: fullName,
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${fullName} — ${jobTitle}`,
    description,
    creator: twitterHandle,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: fullName,
      url: siteUrl,
    },
    {
      "@type": "Person",
      name: fullName,
      url: siteUrl,
      jobTitle,
      email: `mailto:${email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      sameAs: [githubUrl, linkedInUrl, twitterUrl, siteUrl],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${plexMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NotebookFrame>{children}</NotebookFrame>
      </body>
    </html>
  );
}

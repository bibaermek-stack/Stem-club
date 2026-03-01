import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

const siteUrl = "https://stem-ayu.example";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "STEM AYU Club | Robotics, Web, Research, Hackathon",
    template: "%s | STEM AYU Club",
  },
  description:
    "STEM AYU Club: robotics, web development, scientific research, team hackathons and student innovation ecosystem.",
  keywords: [
    "STEM AYU",
    "robotics",
    "web development",
    "research club",
    "hackathon",
    "student club",
  ],
  alternates: {
    canonical: "/",
    languages: {
      kk: "/?lang=kk",
      ru: "/?lang=ru",
      en: "/?lang=en",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "STEM AYU Club",
    title: "STEM AYU Club",
    description:
      "Join STEM AYU Club for robotics, web, research and competition tracks.",
    images: [{ url: "/stem_club.png", width: 1200, height: 630, alt: "STEM AYU Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "STEM AYU Club",
    description: "Robotics, Web, Research, Hackathon tracks for students.",
    images: ["/stem_club.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "STEM AYU Club",
  url: siteUrl,
  logo: `${siteUrl}/stem_club.png`,
  email: "stemayuclub@gmail.com",
  telephone: "+77078611213",
};

export default function RootLayout({ children }) {
  return (
    <html lang="kk">
      <body className={`${spaceGrotesk.variable} ${manrope.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}

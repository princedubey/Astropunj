import { Metadata } from 'next';

export const siteConfig = {
  name: "AstroPunj",
  description: "Your personal astrology guide, bringing cosmic wisdom to your daily life. Get accurate horoscopes, personalized consultations, and expert astrological guidance.",
  url: "https://astropunj.com",
  ogImage: "https://astropunj.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/astropunj",
    facebook: "https://facebook.com/astropunj",
    instagram: "https://instagram.com/astropunj",
  },
  keywords: [
    "astrology",
    "horoscope",
    "vedic astrology",
    "kundli matching",
    "daily horoscope",
    "astrology consultation",
    "online astrology",
    "astrologer",
    "zodiac signs",
    "birth chart",
    "astrology predictions",
    "astrology app",
    "Indian astrology",
    "astrology services",
    "astrology reading"
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Prince Dubey",
      url: "https://github.com/princedubey",
    },
  ],
  creator: "Prince Dubey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@astropunj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification",
  },
}; 
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta', // Define the CSS variable name
});


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "100"
});

export const metadata: Metadata = {
  title: 'Nesso - Creative Digital Agency',
  description:
    'Nesso Digital is a creative agency offering website development, web design, branding, SEO, and digital marketing solutions to help businesses grow online..',
  keywords: [
    'software house',
    'web development',
    'mobile apps',
    'digital transformation',
    'custom software',
    'Italy',
  ],
  authors: [{ name: 'Nesso Digitale' }],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://nessodigital.com',
    title: 'Nesso - Creative Digital Agency',
    description:
      'Nesso Digital is a creative agency offering website development, web design, branding, SEO, and digital marketing solutions to help businesses grow online..',
    siteName: 'Nesso Digitale',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nesso Digitale LAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nesso Digitale LAB - Digital Solutions & Development',
    description:
      'Trasformiamo le tue idee in soluzioni digitali innovative.',
    images: ['/images/og-image.png'],
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
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} ${poppins.variable} antialiased w-full overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

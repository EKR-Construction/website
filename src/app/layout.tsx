import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipToContent from '@/components/SkipToContent';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://ekr.construction'),
  title: {
    default: 'EKR Construction | Custom Welding & Fabrication',
    template: '%s | EKR Construction',
  },
  description:
    'Woman-owned, veteran-operated welding and fabrication services in Linesville, PA. Specializing in stainless steel, process piping, and mobile welding with union-certified craftsmanship.',
  keywords: [
    'welding services',
    'process piping',
    'sanitary piping',
    'stainless steel welding',
    'custom fabrication',
    'mobile welding',
    'Northwestern PA',
    'Erie PA',
    'Linesville PA',
    'Union 449',
    'woman-owned business',
    'veteran-operated',
  ],
  authors: [{ name: 'EKR Construction' }],
  creator: 'EKR Construction',
  publisher: 'EKR Construction',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ekr.construction',
    siteName: 'EKR Construction',
    title: 'EKR Construction | Custom Welding & Fabrication',
    description:
      'Woman-owned, veteran-operated welding and fabrication services in Linesville, PA. Union-certified craftsmanship.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EKR Construction - Custom Welding & Fabrication',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EKR Construction | Custom Welding & Fabrication',
    description:
      'Woman-owned, veteran-operated welding and fabrication services in Linesville, PA.',
    images: ['/og-image.png'],
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
      <head>
        <StructuredData />
      </head>
      <body>
        <SkipToContent />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

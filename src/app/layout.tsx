import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipToContent from '@/components/SkipToContent';

export const metadata: Metadata = {
  metadataBase: new URL('https://ekr.construction'),
  title: {
    default: 'EKR Construction | Professional Construction Services',
    template: '%s | EKR Construction',
  },
  description:
    'Professional construction services for residential and commercial projects. Quality craftsmanship and reliable service you can trust.',
  keywords: [
    'construction',
    'residential construction',
    'commercial construction',
    'building services',
    'contractors',
  ],
  authors: [{ name: 'EKR Construction' }],
  creator: 'EKR Construction',
  publisher: 'EKR Construction',
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
    title: 'EKR Construction | Professional Construction Services',
    description:
      'Professional construction services for residential and commercial projects.',
    // TODO: Add social sharing image (1200x630px) at /public/og-image.jpg
    // See Issue #17 for image optimization
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EKR Construction | Professional Construction Services',
    description:
      'Professional construction services for residential and commercial projects.',
    // TODO: Add social sharing image - same as Open Graph image above
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
      <body>
        <SkipToContent />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

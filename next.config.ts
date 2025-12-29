import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 85],
  },
};

// Bundle analyzer configuration - enabled via ANALYZE=true env variable
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);

import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  images: {
    // Modern image formats for better compression
    formats: ['image/webp', 'image/avif'],
    // Quality levels used by Image components (75 = default, 85 = hero background)
    qualities: [75, 85],
  },
};

// Bundle analyzer configuration - enabled via ANALYZE=true env variable
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);

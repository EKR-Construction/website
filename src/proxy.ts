import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy for adding security and caching headers
 * Improves performance and security for all routes
 */

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Static Asset Caching - aggressive for versioned assets
  if (
    request.nextUrl.pathname.startsWith('/_next/static') ||
    request.nextUrl.pathname.startsWith('/images/')
  ) {
    // Immutable assets can be cached for 1 year
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }

  // HTML pages - revalidate frequently
  if (
    !request.nextUrl.pathname.startsWith('/_next') &&
    !request.nextUrl.pathname.startsWith('/api')
  ) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=0, must-revalidate, s-maxage=3600'
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (handled separately)
     * - _next/webpack-hmr (hot module replacement in dev)
     */
    '/((?!api|_next/webpack-hmr).*)',
  ],
};

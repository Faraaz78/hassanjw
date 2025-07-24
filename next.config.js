/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Allow cross-origin requests from Builder.io development environment
  allowedDevOrigins: [
    '*.projects.builder.codes',
    '*.fly.dev',
    'localhost:3000'
  ],
  // Disable React Strict Mode to prevent double renders and AbortController issues
  reactStrictMode: false,
  // Optimize for development stability
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Reduce dev overlay aggressiveness
  compiler: {
    removeConsole: false,
  },
}

module.exports = nextConfig

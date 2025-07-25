/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },

  // Allow cross-origin requests from Builder.io only in development
  ...(isDev && {
    allowedDevOrigins: [
      "*.projects.builder.codes",
      "*.fly.dev",
      "localhost:3000",
    ],
  }),

  // Disable React Strict Mode to prevent double renders (can be toggled back if needed)
  reactStrictMode: false,

  // Optimize for development stability
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },

  // Reduce dev overlay aggressiveness
  compiler: {
    removeConsole: false, // Consider setting to true for production
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "digital-hippo-production-526d.up.railway.app",
      },
    ],
  },
};

module.exports = nextConfig;

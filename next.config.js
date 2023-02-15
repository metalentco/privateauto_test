/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "strapi-cms-media-dev.s3.us-east-2.amazonaws.com",
      "strapi-cms-media-dev.s3.amazonaws.com",
      "padev.xyz",
    ],
  },
  async rewrites() {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    return [
      {
        source: "/api/:slug*",
        destination: `${BASE_URL}/api/:slug*`,
      },
    ];
  },
};

module.exports = nextConfig;

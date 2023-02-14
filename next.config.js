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
    return [
      {
        source: "/Xapi/:slug*",
        destination: "https://prelogin.padev.xyz/api/:slug*",
      },
    ];
  },

};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.weatherapi.com"],
  },
};

module.exports = nextConfig;

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["cdn.weatherapi.com"],
  },
});

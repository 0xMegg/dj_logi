/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/dj_logi",
  assetPrefix: "/dj_logi/",
  trailingSlash: true,
};

module.exports = nextConfig;

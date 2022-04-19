/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: [
      "3621490034-files.gitbook.io",
      "twitter.com",
      "pbs.twimg.com",
      "pembrock.finance",
    ],
  },
  env: {
    CONTRACT_ID: "dev-1650316224915-37848966573178",
    METAPOOL_CONTRACT_ID: "dev-1650316207809-27081502084975",
  },
  pageExtensions: ["page.tsx", "ts", "tsx"],
};

module.exports = nextConfig;

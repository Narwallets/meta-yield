/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: [
      "3621490034-files.gitbook.io",
      "twitter.com",
      "pbs.twimg.com",
      "pembrock.finance"
    ],
  },
  env: {
    MINIMUM_AMOUNT_DEPOSIT: 1
  },
  pageExtensions: ["page.tsx", "ts", "tsx"],
};

module.exports = nextConfig;

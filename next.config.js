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
    CONTRACT_ID: "dev-1650394254859-18060693673979",
    METAPOOL_CONTRACT_ID: "dev-1650394234665-48199854656837",
  },
  pageExtensions: ["page.tsx", "ts", "tsx"],
};

module.exports = nextConfig;

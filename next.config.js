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
    CONTRACT_ID: "dev-1651084187713-32909136044900",
    METAPOOL_CONTRACT_ID: "meta-v2.pool.testnet",
  },
  pageExtensions: ["page.tsx", "ts", "tsx"],
};

module.exports = nextConfig;

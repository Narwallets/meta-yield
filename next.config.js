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
    CONTRACT_ID: "0_1_6.katherine_fundraising.testnet",
    METAPOOL_CONTRACT_ID: "meta-v2.pool.testnet",
    GA_TRACKING_ID: 'G-330HH1R960'
  },
  pageExtensions: ["page.tsx", "ts", "tsx"],
};

module.exports = nextConfig;

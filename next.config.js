/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: ['images.unsplash.com', 'twitter.com', 'pbs.twimg.com']
  },
  env: {
    CONTRACT_ID: 'dev-1647362531405-23502905659580',
    METAPOOL_CONTRACT_ID: 'meta-v2.pool.testnet'
  }
}

module.exports = nextConfig

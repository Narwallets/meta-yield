/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: ['3621490034-files.gitbook.io', 'twitter.com', 'pbs.twimg.com', 'pembrock.finance']
  },
  env: {
    CONTRACT_ID: 'dev-1649430868741-99451001026176',
    METAPOOL_CONTRACT_ID: 'meta-v2.pool.testnet'
  }
}

module.exports = nextConfig

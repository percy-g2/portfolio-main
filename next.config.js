/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and update if your GitHub repo name is different:
  // basePath: '/your-repo-name',
  // trailingSlash: true,
}

module.exports = nextConfig


/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/post/mortgage-rates',
        destination: '/posts/mortgage-rates',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig;



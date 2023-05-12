/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/post/ability-to-pay-taxation",
        destination: "/posts/ability-to-pay-taxation",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.reservoir.tools",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pools",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

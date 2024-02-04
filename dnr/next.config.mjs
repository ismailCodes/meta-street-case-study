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
  async headers() {
    return [
      {
        source: "/pools/:id*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

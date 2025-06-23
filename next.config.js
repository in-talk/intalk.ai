/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <-- key for static export
  images: {
    unoptimized: true, // for static export if using next/image
  },
  reactStrictMode: true, // Enables React's Strict Mode
};

module.exports = nextConfig;

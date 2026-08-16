/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/new/5", destination: "/", permanent: true },
      { source: "/new/5/:path*", destination: "/:path*", permanent: true },
      { source: "/new", destination: "/", permanent: true },
      { source: "/new/:path*", destination: "/", permanent: true },
      { source: "/blog", destination: "/notes", permanent: true },
    ];
  },
};

export default nextConfig;

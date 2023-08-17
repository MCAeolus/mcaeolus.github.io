/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  //nextConfig
  async rewrites() {
    return [
      {
        source: "/:command",
        destination: "/"
      }
    ]
  }
}

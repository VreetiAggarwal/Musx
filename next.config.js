/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  env: {
    MONGO_URI:
      "mongodb+srv://Vee:vee@cluster0.ftkjkhf.mongodb.net/?retryWrites=true&w=majority",
    // MONGO_DB: "test",
  },
};

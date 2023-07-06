/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "bookworm.madrasthemes.com",
      "res.cloudinary.com",
      "encrypted-tbn0.gstatic.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;

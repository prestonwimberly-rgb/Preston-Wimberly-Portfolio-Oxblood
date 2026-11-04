import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site ships as static HTML with no runtime JavaScript, so metadata must
  // be rendered in <head> rather than streamed into <body> for later hoisting.
  // Matching every user agent turns streaming metadata off; the export script
  // sends a user agent because vinext streams when none is present.
  htmlLimitedBots: /.*/,
  // Netlify serves each exported route as a directory index, so links and
  // canonicals use the trailing-slash form and avoid a redirect hop.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

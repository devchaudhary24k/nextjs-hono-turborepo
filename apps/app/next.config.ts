import type { NextConfig } from "next";

import { env } from "./src/env";

if (env) {
  console.log("hello");
}
const nextConfig: NextConfig = {};

export default nextConfig;

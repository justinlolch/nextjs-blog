const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: process.env.DB_USER,
        mongodb_password: process.env.DB_USER_PASSWORD,
        mongodb_host: process.env.DB_HOST,
        mongodb_database: process.env.DB_DATABASE,
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: process.env.DB_USER,
      mongodb_password: process.env.DB_USER_PASSWORD,
      mongodb_host: process.env.DB_HOST,
      mongodb_database: process.env.DB_DATABASE_PRODUCTION,
    },
  };
};

module.exports = nextConfig;

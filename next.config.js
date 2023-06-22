const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        db: {
          userName: "yashNextDemo",
          password: "pCgRsEpkFanN9mlU",
          cluster: "nextjs-demo-db",
          test: "dev",
        },
      },
    };
  } else {
    return {
      reactStrictMode: true,
      env: {
        db: {
          userName: "yashNextDemo",
          password: "pCgRsEpkFanN9mlU",
          cluster: "nextjs-demo-db",
          test: "prod",
        },
      },
    };
  }
};

module.exports = (phase) => nextConfig(phase);

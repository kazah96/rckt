const dotenv = require("dotenv");
const chalk = require("chalk");

const result = dotenv.config();

let env = {};

if (result.error) {
  console.info(chalk.red(result.error));
} else {
  env = result.parsed;
}

env = { ...env, ...process.env };

if (!env.AUTH_PUBLIC_TOKEN) {
  throw new Error(chalk.red("AUTH_PUBLIC_TOKEN not found in enviroment vars. "));
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  publicRuntimeConfig: {
    ...env
  }
};

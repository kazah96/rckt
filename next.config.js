const dotenv = require("dotenv");
const chalk = require('chalk');

const result = dotenv.config();

if (result.error) {
  throw chalk.red(result.error);
}

const { parsed } = result;

if (!parsed.AUTH_PUBLIC_TOKEN) {
  throw new Error(chalk.red("AUTH_PUBLIC_TOKEN not found in .env"));
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  publicRuntimeConfig: {
    ...parsed
  }
};

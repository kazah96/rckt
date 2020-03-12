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
  publicRuntimeConfig: {
    ...parsed
  }
};

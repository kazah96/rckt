import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { API_URL, AUTH_PUBLIC_TOKEN } = publicRuntimeConfig;

export default {
  api_url: API_URL,
  auth_public_token: AUTH_PUBLIC_TOKEN
};

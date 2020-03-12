import axios from "axios";
import config from '../consts/config'

const api = axios.create({
  baseURL: config.api_url,
  timeout: 1000,
  headers: {
    Authorization: config.auth_public_token,
    "Access-Control-Allow-Origin": "*"
  }
});

export { api };

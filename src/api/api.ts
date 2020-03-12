import axios from "axios";
import config from '../consts/config'

const api = axios.create({
  baseURL: config.api_url,
  timeout: 1000,
  headers: {
    Authorization: config.auth_public_token,
    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6IioiLCJhY3Rpb24iOiIqIiwiZmVlZF9pZCI6Im5vdGlmaWNhdGlvbjQxODI4NDcifQ.O-anfeDHNt9doVUimcWGNSn4sAySaJUo0l3ME0ruQJQ',
    "Access-Control-Allow-Origin": "*"
  }
});

export { api };

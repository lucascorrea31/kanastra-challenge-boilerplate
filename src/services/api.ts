import axios, { isAxiosError } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

export { isAxiosError };

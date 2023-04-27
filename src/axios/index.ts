import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

api.interceptors.request.use((config) => {
  config.url =
    config.url +
    "&units=metric" +
    "&appid=" +
    "5107c67c9d09b83e3dade5fc7ea32e5b";
  return config;
});

export default api;

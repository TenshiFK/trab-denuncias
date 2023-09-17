import axios from "axios";

const api = axios.create({
    baseURL: 'https://64c7ec4fa1fe0128fbd5750a.mockapi.io/'
  });
  
  export default api;
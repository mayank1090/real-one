import axios from "axios";

const app = axios.create({
 baseURL: "https://real-esstate.herokuapp.com/",
   //baseURL: "http://localhost:3003/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
  withCredentials: true,
});

export default app;

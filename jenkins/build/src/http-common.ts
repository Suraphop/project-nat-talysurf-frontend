import axios from "axios";

export default axios.create({
  baseURL: "http://10.128.16.210:20001/",
  headers: {
    "Content-type": "application/json",
  },
});

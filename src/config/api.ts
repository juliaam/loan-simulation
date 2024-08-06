import Axios from "axios";

const api = Axios.create({
  baseURL: "https://loan-simulator-api-production-40bf.up.railway.app",
});

export { api };

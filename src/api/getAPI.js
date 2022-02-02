import axios from "axios";
import { API_URL } from "@utils/api.js";

const getAPI = async () => {
  return await axios.get(API_URL).then((res) => res.data);
};

export default getAPI;

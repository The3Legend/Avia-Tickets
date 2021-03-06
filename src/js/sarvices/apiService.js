import axios from "axios";
import config from "../config/apiConfig";

class Api {
  constructor(config) {
    this.url = config.url;
  }
  async countries() {
    try {
      const respons = await axios.get(`${this.url}/countries`);
      return respons.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
  async cities() {
    try {
      const respons = await axios.get(`${this.url}/cities`);
     return respons.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
  async prices(params) {}
}

const api = new Api(config);

export default api;

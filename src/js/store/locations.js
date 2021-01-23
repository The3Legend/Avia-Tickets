import { compareDesc } from "date-fns/esm";
import api from "../sarvices/apiService";

class Locations {
  constructor(api) {
    this.api = api;
    this.countries = null;
    this.cities = null;
  }
  async init() {
    const respons = await Promise.all([
      this.api.countries(),
      this.api.cities(),
    ]);
    const [countries, cities] = respons;
    this.countries = countries;
    this.cities = cities;
    return respons;
  }
  getCitiesByCountriesCode(code){
    return this.cities.filter(city =>city.country_code === code)
  }
}

const locations = new Locations(api);

export default locations;

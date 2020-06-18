import axios from "axios";

let url = "https://covid19.mathdro.id/api";
let changeableUrl = url;

export const fetchData = async (country) => {
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

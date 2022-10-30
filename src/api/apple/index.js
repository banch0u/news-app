import axios from "../index";

const getAppleNews = () => {
  return axios.get(`everything?q=apple&from=2022-10-28&to=2022-10-28&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);
}
export default { getAppleNews }
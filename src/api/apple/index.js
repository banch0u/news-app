import axios from "../index";

const getAppleNews = () => {
  return axios.get('everything?q=apple&from=2022-10-28&to=2022-10-28&sortBy=popularity&apiKey=df7418685b8247a89c9615a16654107c')
}
export default { getAppleNews }
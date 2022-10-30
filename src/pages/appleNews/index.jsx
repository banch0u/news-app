import { useState } from "react";
import { useEffect } from "react";
import AppleService from "../../api/apple";
import AppleNewsCard from "../../components/appleNewsCard";
import Loading from "../../components/UI/loading";

const AppleNews = () => {
  const [news, setNews] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await AppleService.getAppleNews();
      await setNews(data);
      await setLoad(true);
    };
    getData();
  }, []);

  return load ? <AppleNewsCard data={news} /> : <Loading />;
};
export default AppleNews;

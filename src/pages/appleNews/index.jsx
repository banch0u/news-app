import { useState } from "react";
import { useEffect } from "react";
import AppleService from "../../api/apple";
import Loading from "../../components/UI/loading";

const AppleNews = () => {
  const [news, setNews] = useState({});
  const [load, setLoad] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     const { data } = await setNews(data);
  //   }
  //   getData();
  //   console.log(news);
  // });
  const getData = async () => {
    const { data } = await AppleService.getAppleNews();
    await setNews(data);
    await setLoad(true);
  };

  useEffect(() => {
    getData();
  });

  return load ? (
    <div>
      <h2>Apple News</h2>
      <p>{news.articles[0].author}</p>
    </div>
  ) : (
    <Loading />
  );
};
export default AppleNews;

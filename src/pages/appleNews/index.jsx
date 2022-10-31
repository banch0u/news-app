import { useState, useEffect } from "react";
import AppleService from "../../api/apple";
import AppleNewsCard from "../../components/appleNewsCard";
import Loading from "../../components/UI/loading";

const AppleNews = () => {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(false);
  console.log(news.articles);
  useEffect(() => {
    const getData = async () => {
      const { data } = await AppleService.getAppleNews();
      await setNews(data);
      await setLoad(true);
    };
    getData();
  }, []);

  return load ? (
    <div>
      {news?.articles?.map((item, index) => {
        return (
          <AppleNewsCard
            key={index}
            author={item?.author}
            source={item?.source.name}
            title={item?.title}
            description={item?.description}
            sourceUrl={item?.url}
            image={item?.urlToImage}
            publishDate={item?.publishedAt}
            content={item?.content}
          />
        );
      })}
    </div>
  ) : (
    <Loading />
  );
};
export default AppleNews;

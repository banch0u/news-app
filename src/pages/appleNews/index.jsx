import { useState, useEffect } from "react";
import AppleService from "../../api/apple";
import AppleNewsCard from "../../components/appleNewsCard";
import Loading from "../../components/UI/loading";

const AppleNews = () => {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const { data } = await AppleService.getAppleNews();
      await setNews(data.articles);
      await setLoad(true);
    };
    getData();
  }, []);

  return load ? (
    <div>
      {news?.map((item, index) => {
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
      {/* <AppleNewsCard
        // key={index}
        author={news[0].author}
        source={news[0].source.name}
        title={news[0].title}
        description={news[0].description}
        sourceUrl={news[0].url}
        image={news[0].urlToImage}
        publishDate={news[0].publishedAt}
        content={news[0].content}
      /> */}
    </div>
  ) : (
    <Loading />
  );
};
export default AppleNews;

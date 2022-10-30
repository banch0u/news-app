import { useState, useEffect } from "react";

const AppleNewsCard = ({ data }) => {
  const [news, setNews] = useState({});
  useEffect(() => {
    setNews(data);
  }, [data]);
  return (
    <div>
      <h1></h1>
    </div>
  );
};
export default AppleNewsCard;

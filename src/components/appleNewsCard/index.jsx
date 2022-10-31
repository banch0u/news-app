import { useState, useEffect } from "react";

const AppleNewsCard = ({
  author,
  source,
  title,
  description,
  sourceUrl,
  image,
  publishDate,
  content,
}) => {
  return (
    <div>
      <div>
        {/* <img src={image} alt="" /> */}
        <div>{author ? author : "fuck you"}</div>
      </div>
    </div>
  );
};
export default AppleNewsCard;

import { useState, useEffect } from "react";
import styles from "./index.module.css";
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
  const [date, setDate] = useState("");
  // useEffect(() => {
  //   function getDate() {
  //     const date = new Date(this.movieLastProgressDate);
  //     const mm = date.getMonth() + 1; // getMonth() is zero-based
  //     const dd = date.getDate();
  //     return [
  //       (dd > 9 ? "" : "0") + dd,
  //       (mm > 9 ? "" : "0") + mm,
  //       date.getFullYear(),
  //     ].join("/");
  //   }
  // }, []);
  return (
    <div className={styles["container"]}>
      <div className={styles["image-col"]}>
        <img src={image} alt="" />
      </div>
      <div className={styles["text-col"]}>
        <div className={styles["date-n-source"]}>
          <p className={styles["date"]}>{publishDate}</p>
          <a href={sourceUrl} className={styles["source"]}>
            {source}
          </a>
        </div>
        <h4 className={styles["title"]}>{title}</h4>
        <p className={styles["descrip"]}>{description}</p>
        <p className={styles["author"]}>Article by {author}</p>
      </div>
    </div>
  );
};
export default AppleNewsCard;

import { Audio } from "react-loader-spinner";
import styles from "./index.module.css";

const Loading = () => {
  return (
    <div className={styles["container"]}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#BF8256"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
export default Loading;

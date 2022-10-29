import styles from "./index.module.css";
const Title = ({ title }) => {
  return (
    <div className={styles["back"]}>
      <h2>{title}</h2>
    </div>
  );
};
export default Title;

import styles from "./index.module.css";

const Wrapper = (props) => {
  return <div className={styles["wrapper"]}>{props.children}</div>;
};
export default Wrapper;

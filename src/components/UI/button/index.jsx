import styles from "./index.module.css";
const Button = ({ buttonName }) => {
  return <button className={styles["btn"]}>{buttonName}</button>;
};
export default Button;

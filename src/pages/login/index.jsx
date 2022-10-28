import Button from "../../components/UI/button";
import Wrapper from "../../components/UI/wrapper";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Wrapper>
      <div className={styles["wrap"]}>
        <h1>Log in</h1>
        <Link to={"/register"}>Don't have an account? </Link>
        <form className={styles["card"]}>
          <label htmlFor="name">Login:</label>
          <input type="text" />
          <label htmlFor="password">Password:</label>
          <input type="password" />
          <div>
            <Button buttonName={"Log in"} />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
export default Login;

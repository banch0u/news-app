import Button from "../../components/UI/button";
import Wrapper from "../../components/UI/wrapper";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <Wrapper>
      <div className={styles["wrap"]}>
        <h1>Register</h1>
        <Link to={"/login"}>Already have an account? </Link>
        <form className={styles["card"]}>
          <label htmlFor="name">Login:</label>
          <input type="text" />
          <label htmlFor="email">Email:</label>
          <input type="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" />
          <div>
            <Button buttonName={"Register"} />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
export default Register;

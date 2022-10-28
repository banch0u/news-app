import { NavLink } from "react-router-dom";
import { MonkeLogo } from "../../../icons";
import Wrapper from "../../UI/wrapper";
import Button from "../../UI/button";
import styles from "./index.module.css";
const Header = () => {
  return (
    <Wrapper>
      <header>
        <nav>
          <div className={styles["align"]}>
            <NavLink to={"/"}>
              <MonkeLogo />
            </NavLink>
            <NavLink to={"/"}>
              <h1>Monke</h1>
            </NavLink>
          </div>
          <div className={styles["align"]}>
            <NavLink to={"/login"}>
              <Button buttonName={"Log in"} />
            </NavLink>
            <NavLink to={"/register"}>
              <Button buttonName={"Register"} />
            </NavLink>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};
export default Header;

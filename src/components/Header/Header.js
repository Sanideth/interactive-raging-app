import { ReactComponent as StarIcon } from "../../images/icon-star.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.HeaderInitial}>
      <StarIcon />
    </div>
  );
};

export default Header;

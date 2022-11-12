import { ReactComponent as StarIcon } from "../../images/icon-star.svg";
import { ReactComponent as SubmitedIcon } from "../../images/illustration-thank-you.svg";
import classes from "./Header.module.css";

const Header = ({ rating }) => {
  return (
    <div>
      {rating ? (
        <div className={classes.HeaderSubmited}>
          <SubmitedIcon />
          <div className={classes.thankYouText}>
            You selected {rating} out of 5
          </div>
        </div>
      ) : (
        <div className={classes.HeaderInitial}>
          <StarIcon />
        </div>
      )}
    </div>
  );
};

export default Header;

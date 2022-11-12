import classes from "./RatingButton.module.css";

const RatingButton = ({ number }) => {
  return <div className={classes.RatingButton}>{number}</div>;
};

export default RatingButton;

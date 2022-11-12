import React from "react";
import classes from "./RatingButton.module.css";

const RatingButton = ({ value, setRatingValue, ratingValue }) => {
  const handleClick = () => {
    setRatingValue(value);
  };

  return (
    <div
      className={
        value === ratingValue
          ? classes.RatingButtonClicked
          : classes.RatingButton
      }
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default RatingButton;

import React from "react";
import RatingButton from "../RatingButton/RatingButton";
import classes from "./Rating.module.css";

const Rating = ({ setRating }) => {
  const ratingArray = [1, 2, 3, 4, 5];

  const [ratingValue, setRatingValue] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ratingValue !== null) {
      setRating(ratingValue);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.Rating}>
          {ratingArray.map((number) => (
            <RatingButton
              value={number}
              key={number}
              setRatingValue={setRatingValue}
              ratingValue={ratingValue}
            />
          ))}
        </div>

        <button className={classes.button} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Rating;

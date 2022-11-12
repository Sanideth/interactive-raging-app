import RatingButton from "../RatingButton/RatingButton";
import classes from "./Rating.module.css";

const Rating = () => {
  const ratingArray = [1, 2, 3, 4, 5];
  return (
    <>
      <div className={classes.Rating}>
        {ratingArray.map((number) => (
          <RatingButton number={number} key={number} />
        ))}
      </div>
      <button className={classes.button}>Submit</button>
    </>
  );
};

export default Rating;

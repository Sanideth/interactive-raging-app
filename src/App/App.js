import React from "react";
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import Rating from "../components/Rating/Rating";
import classes from "./App.module.css";

function App() {
  const [rating, setRating] = React.useState(null);

  return (
    <div className={classes.App}>
      <Header rating={rating} />
      <Info
        heading={rating ? "Thank you!" : "How did we do?"}
        text={
          rating
            ? "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
            : "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        }
        rating={rating}
      />
      {!rating && <Rating setRating={setRating} />}
    </div>
  );
}

export default App;

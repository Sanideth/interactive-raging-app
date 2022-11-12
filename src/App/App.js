import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import Rating from "../components/Rating/Rating";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Info
        heading="How did we do?"
        text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
      />
      <Rating />
    </div>
  );
}

export default App;

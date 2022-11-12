import classes from "./Info.module.css";

const Info = ({ heading, text }) => {
  return (
    <div className={classes.InfoInitial}>
      <h1 className={classes.heading}>{heading}</h1>
      <p className={classes.text}>{text}</p>
    </div>
  );
};

export default Info;

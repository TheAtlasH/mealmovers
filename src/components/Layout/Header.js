import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>MealMovers</h1>
        <HeaderCartButton />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table with foods" />
      </div>
    </>
  );
};

export default Header;

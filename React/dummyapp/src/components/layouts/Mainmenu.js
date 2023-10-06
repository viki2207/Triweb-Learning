import { Link } from "react-router-dom";
import MainMenuStyle from "./Mainmenu.model.css";
import FavouriteContext from "../../store/contextFavourite";
import { useContext } from "react";

function MainMenu() {
  const favouriteContext = useContext(FavouriteContext);
  const totalFavouriteItems = favouriteContext.favouriteItems.length;
  return (
    <header className={MainMenuStyle.header}>
      <ul>
        <li key="{Home}">
          <Link to="/">Home</Link>
        </li>
        <li key="{About}">
          <Link to="/about">About</Link>
        </li>
        <li key="{Contact}">
          <Link to="/contact">Contact</Link>
        </li>
        <li key="{Product}">
          <Link to="/product">Product</Link>
        </li>

        <li className={MainMenuStyle.favouriteCount}>
          <Link to="/product/favourite">{totalFavouriteItems}</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainMenu;

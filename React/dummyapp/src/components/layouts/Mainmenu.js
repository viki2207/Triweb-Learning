import { Link } from "react-router-dom";
import MainMenuStyle from "./Mainmenu.model.css";

import { useContext } from "react";

function MainMenu() {
  //const favouriteContext = useContext(FavouriteContext);
  // const totalFavouriteItems = favouriteContext.favouriteItems.length;
  return (
    <header className={MainMenuStyle.header}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/product/add">Add Product</Link>
        </li>
        {/* <li className={MainMenuStyle.favouriteCount}>
          <Link to="/product/favourite">{totalFavouriteItems}</Link>
        </li> */}
      </ul>
    </header>
  );
}

export default MainMenu;

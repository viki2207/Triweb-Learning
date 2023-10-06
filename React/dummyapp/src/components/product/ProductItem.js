import CustomWrapper from "../layouts/CustomWrapper";
import style from "./ProductItem.module.css";
import logo from "../product/img/img1.jpg";
import FavouriteContext from "../../store/contextFavourite";
import { useContext } from "react";
function ProductItem(props) {
  const favouriteContext = useContext(FavouriteContext);
  const isFavourite = favouriteContext.isFavouriteItem(props.item._id);
  const toggleFavourite = () => {
    if (isFavourite) {
      favouriteContext.removeFavouriteItem(props.item._id);
      console.log("Removed favourite");
    } else {
      favouriteContext.addFavouriteItem({ ...props.item });
      console.log("Added favourite");
    }
  };
  return (
    <li key={props.item._id} className={style.li}>
      <CustomWrapper myname="Azhar">
        <div>
          <img src={logo} alt="No Img" className={style.image}></img>

          <h2>{props.item.Product_Name}</h2>

          <p>{props.item.Description}</p>
          <h4>{props.item.Price}</h4>
          <button>Purchase</button>
          <button
            className={isFavourite ? style.heartFvrt : style.heartUnfvrt}
            onClick={toggleFavourite}
          ></button>
        </div>
      </CustomWrapper>
    </li>
  );
}
export default ProductItem;

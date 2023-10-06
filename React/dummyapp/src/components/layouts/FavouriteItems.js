import FavouriteContext from "../../store/contextFavourite";
import { useContext } from "react";
import ProductList from "../product/ProductList";

function FavouriteItems() {
  const favouriteContext = useContext(FavouriteContext);
  return (
    <div>
      <h1>My favourite Items</h1>
      <ProductList products={favouriteContext.favouriteItems} />
    </div>
  );
}
export default FavouriteItems;

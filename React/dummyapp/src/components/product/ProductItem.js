import CustomWrapper from "../layouts/CustomWrapper";
import style from "./ProductItem.module.css";
function ProductItem(props) {
  return (
    <li key={props.item.id}>
      <CustomWrapper myname="Azhar">
        <div>
          <div>
            <img
              src={props.item.image}
              alt="No Img"
              className={style.img}
            ></img>
          </div>
          {/* <div>
          <h2>some name</h2>
          <p>Some description</p>
          <h4>p2000</h4>
        </div> */}
          <div>
            <h2>{props.item.Product_Name}</h2>

            <p>{props.item.Description}</p>
            <h4>{props.item.Price}</h4>
          </div>
          <button>Purchase</button>
        </div>
      </CustomWrapper>
    </li>
  );
}
export default ProductItem;

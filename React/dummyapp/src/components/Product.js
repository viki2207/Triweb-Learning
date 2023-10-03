import ProductList from "./product/ProductList";
import image1 from "./product/img/img1.jpg";
import image2 from "./product/img/img2.png";

function product() {
  let Products = [];
  return (
    <div>
      <ProductList products={Products} />
    </div>
  );
}
export default product;

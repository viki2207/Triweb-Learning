import ProductItem from "./ProductItem";
function ProductList(props) {
  return (
    <div>
      Product List
      {props.products.map((item) => {
        //return <li key={item.id}>{item.product_name}</li>;

        return <ProductItem key={item._id} id={item._id} item={item} />;
      })}
    </div>
  );
}

export default ProductList;

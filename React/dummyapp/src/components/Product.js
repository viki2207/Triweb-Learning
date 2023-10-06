import React, { useState, useEffect } from "react";

import ProductList from "./product/ProductList";
function Product() {
  let [products, setProducts] = useState([]);
  //use state using for set the data
  let [isDataFetching, setIsDataFetching] = useState(true);
  //using for the conditions
  useEffect(() => {
    setIsDataFetching(true);
    fetch("http://localhost:3004/product")
      .then((response) => response.json())
      .then((responseData) => {
        setIsDataFetching(false);
        setProducts(responseData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isDataFetching) {
    return <div>Data is loading</div>;
  }
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
export default Product;

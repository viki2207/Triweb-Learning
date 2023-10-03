import { useNavigate } from "react-router-dom";
import AddProductForm from "../product/AddProductform";
function AddProduct() {
  const navigate = useNavigate();
  function addProductHandler(newProduct) {
    // console.log(newProduct);
    fetch("http://localhost:3004/product", {
      // to request data from a server
      method: "POST",
      body: JSON.stringify(newProduct),
      // body:newProduct,

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => navigate("/"), { replace: true }) //redirect to home page once the product is added.

      // .then(data=>console.log(data)) //that result includes the additional objectId which was assgined by the mongo and now this console.log(data) will display the objectId too. //takes data send by the user in result
      .catch((err) => console.log(err));
  }
  return <AddProductForm addProductHandler={addProductHandler} />;
}
export default AddProduct;

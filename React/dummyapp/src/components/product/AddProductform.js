import { useRef } from "react";
import Styles from "./AddProductform.css";
import CustomWrapper from "../layouts/CustomWrapper";
function AddProductForm(props) {
  const productNameRef = useRef(); //reference is used to take the input from the input tage i.e on the webpage to the javascript using current.value method
  const imageRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  function submitHandler(event) {
    event.preventDefault(); //prevents the default loading of the webpage
    const productName = productNameRef.current.value;

    const image = imageRef.current.value;

    const price = priceRef.current.value;

    const description = descriptionRef.current.value;

    const product = {
      productName,
      image,
      price,
      description,
    };
    console.log("iske inche::");
    console.log(product);
    props.addProductHandler(product); //created a method that will send data inputed in frontend to backend.
    // console.log(product);
  }
  return (
    <CustomWrapper>
      <form className={Styles.form} onSubmit={submitHandler}>
        <div className={Styles.groups}>
          <label htmlFor="productName">Enter product name</label>
          <input
            type="text"
            placeholder=""
            id="productName"
            ref={productNameRef}
          />
        </div>
        <div className={Styles.groups}>
          <label htmlFor="image">Add image</label>
          <input type="text" placeholder="" id="image" ref={imageRef} />
        </div>
        <div className={Styles.groups}>
          <label htmlFor="price">Enter price</label>
          <input type="text" placeholder="" id="price" ref={priceRef} />
        </div>
        <div className={Styles.groups}>
          <label htmlFor="description">Add description</label>
          <textarea rows="5" id="description" ref={descriptionRef} />
        </div>
        <div className={Styles.btn}>
          <button>Submit</button>
        </div>
      </form>
    </CustomWrapper>
  );
}

export default AddProductForm;

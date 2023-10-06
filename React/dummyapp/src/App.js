// import FirstComponent from "./components/FirstComponent";
// import Backdrop from "./components/Backdrop";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import { Routes, Route } from "react-router-dom";
// import Mainmenu from "./components/layouts/Mainmenu";
// import Product from "./components/Product";
// import { useState } from "react";
// import Layout from "./components/layouts/Layout";
// function App() {
//   const [ModalOpen, setModalOpen] = useState(false);
//   function modalCloseHandler() {
//     setModalOpen(false);
//   }
//   function OpenmodalHanlder() {
//     setModalOpen(true);
//   }
//   return (
//     <div>
//       <Layout>

//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/contact" element={<Contact />}></Route>
//           <Route path="/Product" element={<Product />}></Route>
//         </Routes>
//       </Layout>

//       {/* <h1>Hi Its my Application</h1>
//       {ModalOpen ? (
//         <FirstComponent
//           owner="Viki"
//           reason="For craziness"
//           closemodal={modalCloseHandler}
//         />
//       ) : null}
//       {ModalOpen ? <Backdrop /> : null}
//       <button onClick={OpenmodalHanlder}>Open modal</button> */}
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Layout from "./components/layouts/Layout";
import AddProduct from "./components/product/AddProduct";
import FavouriteItems from "./components/layouts/FavouriteItems";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Product/add" element={<AddProduct />}></Route>
        <Route path="/product/favourite" element={<FavouriteItems />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;

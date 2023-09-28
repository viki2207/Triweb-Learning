import FirstComponent from "./components/FirstComponent";
import Backdrop from "./components/Backdrop";
import { useState } from "react";
function App() {
  const [ModalOpen, setModalOpen] = useState(false);
  function modalCloseHandler() {
    setModalOpen(false);
  }
  function OpenmodalHanlder() {
    setModalOpen(true);
  }
  return (
    <div>
      <h1>Hi Its my Application</h1>
      {ModalOpen ? (
        <FirstComponent
          owner="Viki"
          reason="For craziness"
          closemodal={modalCloseHandler}
        />
      ) : null}
      {ModalOpen ? <Backdrop /> : null}
      <button onClick={OpenmodalHanlder}>Open modal</button>
    </div>
  );
}

export default App;

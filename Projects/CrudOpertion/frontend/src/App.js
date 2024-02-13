import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Create from "./components/Read";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/all" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

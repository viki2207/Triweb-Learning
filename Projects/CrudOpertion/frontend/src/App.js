import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Read from "./components/Read";
import Create from "./components/Read";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/all" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

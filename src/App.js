import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hotel from "./pages/hotels/Hotel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotel/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

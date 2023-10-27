import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative">
      <div className="bg-slate-900 fixed top-0 z-[100] w-screen ">
        <Navbar />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      
    </div>
  );
};

export default App;
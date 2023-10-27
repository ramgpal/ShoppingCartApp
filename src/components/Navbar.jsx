// import Home from "../pages/Home";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="w-[100%]">
      <nav className=" flex justify-between items-center  text-slate-200 h-20 max-w-6xl md:mx-auto mx-6">
        <NavLink to="/">
          <div className="ml-5">
            <img src="./logo.png" className="w-[180px]" alt="logo" />
          </div>
        </NavLink>

        <div className="flex justify-center items-center gap-x-2 font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <div>
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-3xl" />
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart?.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };


  return (
    <div className="flex flex-col items-center justify-between gap-x-10 hover:scale-110 translate-4 duration-300 ease-in hover:shadow-2xl hover:cursor-pointer gap-3 p-4 mt-10 ml-5 rounded-xl shadow-md">
      
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">
          {item.title}
        </p>
      </div>

      <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
        <p>
          {item.description.split(" ").slice(0, 10).join(" ") + `...`}
        </p>
      </div>

      <div className="h-[180px]">
        <img className="h-full w-full" src={item.image} alt="product-img" />
      </div>

      <div className="flex justify-between item-center gap-12 w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </div>

        <div>
          {cart?.some((p) => p.id === item.id) ? (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
              onClick={removeFromCart}
            >
              {" "}
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>

      </div>

    </div>
  );
};

export default Product;

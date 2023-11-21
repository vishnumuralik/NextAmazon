import { resetCart } from "@/store/nextSlice";
import { useDispatch } from "react-redux";

const ResetCart = () => {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Are you sure to reset your items from the cart?"
    );
    if (confirmReset) {
      dispatch(resetCart());
    }
  };
  return (
    <button
      onClick={handleResetCart}
      className="w-55 h-11 text-md p-3 px-5 bg-gray-400 rounded-lg hover:bg-amazon_yellow text-red-600 hover:text-white duration-300">
      Reset Your Basket
    </button>
  );
};

export default ResetCart;
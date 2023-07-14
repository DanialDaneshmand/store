import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment, remove } from "../Redux/Cart/CartActions";

const CartPage = () => {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <section className="h-screen p-10 lg:p-0 mt-24 w-full flex flex-col lg:flex-row justify-center mb-16">
      
      <section className="w-full lg:w-8/12 mr-8 border p-16 flex  flex-col items-center">
        {cart.length ? (
          cart.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col md:flex-row md:justify-between border-b border-violet-200  items-center mb-4 py-2 w-full"
              >
                <div className="flex justify-between items-center w-full md:w-8/12 ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20"
                  />
                  <p className="w-3/12 text-stone-900">{product.name}</p>
                  <p className="text-stone-900">Price :{product.price}$</p>
                </div>
                <div className="gap-3 lg:gap-3 w-full lg:w-4/12 flex  items-center justify-center mt-3 lg:mt-0">
                  <div>
                    <button
                      className="bg-white font-bold text-stone-900 rounded-l-md px-4 py-1 border  border-violet-200"
                      onClick={() => dispatch(increment(product))}
                    >
                      +
                    </button>
                    <button className="bg-white font-bold text-stone-900  px-4 py-1 border border-l-0 border-r-0 border-violet-200">
                      {product.quantity}
                    </button>
                    <button
                      className="bg-white font-bold text-stone-900 rounded-e-md px-4 py-1 border border-violet-200"
                      onClick={() => dispatch(decrement(product))}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <button
                      className="border border-violet-200 text-red-600 px-3 py-2 rounded"
                      onClick={() => dispatch(remove(product))}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-lg">سبد خرید خالی است!</p>
        )}
      </section>
    </section>
  );
};

export default CartPage;



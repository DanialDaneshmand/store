import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Cart/CartActions";
import { ToastContainer, toast } from "react-toastify";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return product ? <ShowProducts product={product} /> : <Loading />;
};

export default ProductPage;

const Loading = () => {
  return (
    <section className="my-8 grid md:grid-cols-2">
      <div className="p-8 flex items-center justify-center">
        <Skeleton height={400} width={400} />
      </div>
      <div className="my-24 flex flex-col justify-between px-8 gap-y-4">
        <p>
          <Skeleton height={50} width={200} />
        </p>
        <p>
          <Skeleton height={80} width={600} />
        </p>
        <p>
          <Skeleton height={50} width={85} />
        </p>
        <p>
          <Skeleton height={70} width={600} />
        </p>
        <div className="flex gap-2">
          <Skeleton height={50} width={80} />
          <Skeleton height={50} width={80} />
        </div>
      </div>
    </section>
  );
};

const ShowProducts = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state);

  const checkCart = () => {
    return cart.find((p) => p.id === product.id);
  };
  return (
    <section className="my-8 grid md:grid-cols-2">
      <div className="flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className=" h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
        />
      </div>
      <div className="my-24 flex flex-col justify-between px-8 gap-y-4">
        <p className="text-3xl">{product.category}</p>
        <p className="text-4xl  ">{product.title}</p>
        <p className="text-2xl flex items-center">
          <p>Rating :</p>
          {product.rating && product.rating.rate}{" "}
          <span>
            <FaStar />
          </span>
        </p>
        <p className="text-2xl font-bold ">{product.price} $</p>
        <p className="text-stone-500">{product.description}</p>
        <div>
          {checkCart() ? (
            <Link to="/cart">
              <button className="mr-1 border border-stone-900 text-stone-900 py-1 px-2 rounded font-bold hover:bg-stone-900 hover:text-white">
                رفتن به سبد خرید
              </button>
            </Link>
          ) : (
            <button
              onClick={() => {
                dispatch(addToCart(product));
                toast.success(` به سبد خرید اضافه شد ${product.title}`);
              }}
              className="mr-1 border border-stone-900 text-stone-900 py-1 px-2 rounded font-bold hover:bg-stone-900 hover:text-white"
            >
              اضافه کردن به سبد خرید
            </button>
          )}
          <Link to="/cart">
            <button className="border border-stone-900 text-stone-900 py-1 px-2 rounded font-bold hover:bg-stone-900 hover:text-white">
              سبد خرید
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

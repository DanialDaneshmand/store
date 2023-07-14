import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
        setFilter(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.log(products);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="flex flex-col items-center mt-16">
      <div className=" flex  justify-center pt-16 pb-8 w-3/4 border-b ">
        <p className="text-2xl font-bold">جدیدترین محصولات</p>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <ShowProducts
          setFilter={setFilter}
          filter={filter}
          products={products}
        />
      )}
    </div>
  );
};

export default Products;

const Loading = () => {
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 p-16 gap-8 ml-16 sm:ml-0">
      <div className="w-3/4 h-[400px]">
        <Skeleton className="h-full" />
      </div>
      <div className="w-3/4 h-[400px]">
        <Skeleton className="h-full" />
      </div>
      <div className="w-3/4 h-[400px]">
        <Skeleton className="h-full" />
      </div>
      <div className="w-3/4 h-[400px]">
        <Skeleton className="h-full" />
      </div>
      <div className="w-3/4 h-[400px]">
        <Skeleton className="h-full" />
      </div>
      <div className="w-3/4 h-[400px]">
        <Skeleton className="h-full" />
      </div>
    </div>
  );
};

const ShowProducts = ({ filter, products, setFilter }) => {
  const filterProducts = (cat) => {
    const updatedProducts = products.filter((p) => p.category === cat);
    setFilter(updatedProducts);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center mt-8">
        <button
          onClick={() => setFilter(products)}
          className="border border-stone-900 rounded py-1 px-2 mr-2  hover:bg-stone-900 hover:text-white"
        >
          همه محصولات
        </button>
        <button
          onClick={() => filterProducts(`men's clothing`)}
          className="border border-stone-900 rounded py-1 px-2 mr-2 hover:bg-stone-900 hover:text-white"
        >
          لباس های مردانه
        </button>
        <button
          onClick={() => filterProducts(`women's clothing`)}
          className="border border-stone-900 rounded py-1 px-2 mr-2  hover:bg-stone-900 hover:text-white"
        >
          لباس های زنانه
        </button>
        <button
          onClick={() => filterProducts(`jewelery`)}
          className="border border-stone-900 rounded py-1 px-2 mr-2  hover:bg-stone-900 hover:text-white"
        >
          زیورالات
        </button>
        <button
          onClick={() => filterProducts(`electronics`)}
          className="border border-stone-900 rounded py-1 px-2 mr-2  hover:bg-stone-900 hover:text-white"
        >
          الکترونیک
        </button>
      </div>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 p-16 mt-8 ml-16 sm:ml-0">
        {filter.map((product) => (
          <div className="border w-3/4 rounded p-4" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ height: "300px" }}
            />
            <p className="text-xl  mt-4">{product.title.substring(0, 14)}</p>
            <p>{product.price} $</p>
            <Link to={`/product/${product.id}`}>
              <button className="border border-stone-900 rounded py-1 px-2 mr-2  hover:bg-stone-900 hover:text-white">
                همین حالا بخرید
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

import { NavLink, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [active, setActive] = useState(true);
  const cart = useSelector((state) => state);

  return (
    <header className="w-full ">
      <nav className="bg-stone-200 shadow-smsdf flex flex-col sm:flex-row  p-2 sm:p-0 justify-between items-center">
        <div className="flex items-center justify-between w-full sm:w-3/12 ">
          <div className="flex items-center">
            <FaShoppingBag className="text-stone-900 text-2xl sm:text-2xl" />
            <p className="text-stone-900 text-xl sm:text-md">Danial Shopping</p>
          </div>
          <button onClick={() => setActive(!active)}>
            <FaBars className="text-stone-900 text-lg sm:hidden" />
          </button>
        </div>
        <div
          className={`sm:w-9/12 ${
            active ? "hidden" : "block"
          } sm:block items-center`}
        >
          <ul
            style={{ direction: "rtl" }}
            className=" w-full flex justify-center  flex-col sm:flex-row  sm:p-3  mt-4 sm:mt-0"
          >
            <li className="mb-2  block  sm:inline-block sm:mr-8">
              <NavLink
                onClick={() => setActive(true)}
                to="/"
                className={(active) =>
                  active.isActive
                    ? " text-stone-900 font-bold border-b-2 pb-1 border-stone-900"
                    : "text-stone-900 hover:border-b-2 hover:border-stone-900 hover:pb-1"
                }
              >
                صفحه اصلی
              </NavLink>
            </li>
            <li className="block  sm:inline-block mb-2 sm:mr-8">
              <NavLink
                onClick={() => setActive(true)}
                to="/products"
                className={(active) =>
                  active.isActive
                    ? " text-stone-900 font-bold border-b-2 pb-1 border-stone-900"
                    : "text-stone-900 hover:border-b-2 hover:border-stone-900 hover:pb-1"
                }
              >
                محصولات
              </NavLink>
            </li>
            <li className=" block  sm:inline-block mb-2 sm:mr-8 relative">
              <NavLink
                onClick={() => setActive(true)}
                to="/about"
                className={(active) =>
                  active.isActive
                    ? " text-stone-900 font-bold border-b-2 pb-1 border-stone-900"
                    : "text-stone-900 hover:border-b-2 hover:border-stone-900 hover:pb-1"
                }
              >
                درباره ما
              </NavLink>
            </li>
            <li className=" block  sm:inline-block mb-2 sm:mr-8 relative">
              <NavLink
                onClick={() => setActive(true)}
                to="/cart"
                className={(active) =>
                  active.isActive
                    ? " text-stone-900 font-bold border-b-2 pb-1 border-stone-900"
                    : "text-stone-900 hover:border-b-2 hover:border-stone-900 hover:pb-1"
                }
              >
                سبد خرید
                <span  className=" inline-block w-5 h-5 rounded-[50%] bg-stone-900 text-white pr-[5px] ">
                  {cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="  mr-8 flex items-center p-2 text-violet-900 text-lg font-bold cursor-pointer">
          <button
            className={`flex items-center ${userData?'block':'hidden'}`}
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            <span className={`mr-1`}>خروج</span>
            <FaSignOutAlt />
          </button>
        </div> */}
      </nav>
    </header>
  );
};

export default Navigation;

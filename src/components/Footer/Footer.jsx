import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-stone-300 py-8 flex justify-center items-center flex-col">
      <p>producted by:danial.d1995</p>
      <div className="flex justify-center items-center gap-8 mt-8">
        <p className="text-2xl text-stone-900">
          <FaInstagramSquare />
        </p>
        <p className="text-2xl text-stone-900">
          <FaTelegram />
        </p>
        <p className="text-2xl text-stone-900">
          <FaWhatsappSquare />
        </p>
        <p className="text-2xl text-stone-900">
          <FaYoutubeSquare />
        </p>
      </div>
    </footer>
  );
};

export default Footer;

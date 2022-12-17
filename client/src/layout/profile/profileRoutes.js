import { AiOutlineShoppingCart } from "react-icons/ai";
import { SiWish } from "react-icons/si";
import { MdPayment } from "react-icons/md";

const iconStyle = "lg:h-4 md:h-10 h-8 lg:w-4 md:w-10 w-8 lg:mx-0 md:mx-auto";
const routes = [
  {
    icon: <AiOutlineShoppingCart className={iconStyle} />,
    name: "My Cart",
    anchor: "my-cart",
  },
  {
    icon: <SiWish className={iconStyle} />,
    name: "My Wishlist",
    anchor: "my-wishlist",
  },
  {
    icon: <MdPayment className={iconStyle} />,
    name: "My Payment",
    anchor: "my-payment",
  },
];

export default routes;

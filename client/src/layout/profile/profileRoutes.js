import { AiOutlineShoppingCart } from "react-icons/ai";
import { SiWish } from "react-icons/si";

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
];

export default routes;

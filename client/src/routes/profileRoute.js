import Profile from "../layout/profile/Profile";
import MyCart from "../pages/profile/MyCart";
import MyProfile from "../pages/profile/MyProfile";
import MyWishlist from "../pages/profile/MyWishlist";
import Payment from "../pages/profile/Payment";
import PaymentMethods from "../pages/profile/PaymentMethods";
import UpdatePayment from "../pages/profile/UpdatePayment";

const profileRoute = {
  path: "/profile",
  element: <Profile />,
  children: [
    {
      path: "/profile",
      element: <MyProfile />,
    },
    {
      path: "my-cart",
      element: <MyCart />,
    },
    {
      path: "my-wishlist",
      element: <MyWishlist />,
    },
    {
      path: "my-payment",
      element: <Payment />,
    },
    {
      path: "payment-methods",
      element: <PaymentMethods />,
    },
    {
      path: "payment-methods/update/:_id",
      element: <UpdatePayment />,
    },
  ],
};

export default profileRoute;

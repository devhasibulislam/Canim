import Account from "../layout/Account";
import ResetPassword from "../pages/main/account/ResetPassword";
import Signin from "../pages/main/account/Signin";
import Signup from "../pages/main/account/Signup";

const accountRoute = {
  path: "/account",
  element: <Account />,
  children: [
    { path: "/account", element: <Signin /> },
    { path: "sign-in", element: <Signin /> },
    { path: "sign-up", element: <Signup /> },
    { path: "reset-password", element: <ResetPassword /> },
  ],
};

export default accountRoute;

import Main from "../layout/main/Main";
import Home from "../pages/main/Home";

const mainRoute = {
  path: "/",
  element: <Main />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default mainRoute;

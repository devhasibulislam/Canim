import Main from "../layout/main/Main";
import Blogs from "../pages/main/blog/Blogs";
import Home from "../pages/main/Home";

const mainRoute = {
  path: "/",
  element: <Main />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
  ],
};

export default mainRoute;

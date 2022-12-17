import { createBrowserRouter } from "react-router-dom";
import accountRoute from "./accountRoute";
import dashboardRoute from "./dashboardRoute";
import mainRoute from "./mainRoute";
import profileRoute from "./profileRoute";

const routes = createBrowserRouter([
  mainRoute,
  dashboardRoute,
  accountRoute,
  profileRoute,
]);

export default routes;

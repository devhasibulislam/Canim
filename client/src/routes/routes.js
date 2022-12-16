import { createBrowserRouter } from "react-router-dom";
import accountRoute from "./accountRoute";
import dashboardRoute from "./dashboardRoute";
import mainRoute from "./mainRoute";

const routes = createBrowserRouter([mainRoute, dashboardRoute, accountRoute]);

export default routes;

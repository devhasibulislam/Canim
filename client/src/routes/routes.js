import { createBrowserRouter } from "react-router-dom";
import dashboardRoute from "./dashboardRoute";
import mainRoute from "./mainRoute";

const routes = createBrowserRouter([mainRoute, dashboardRoute]);

export default routes;

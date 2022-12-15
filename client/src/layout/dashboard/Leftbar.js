import React from "react";
import { HiChartPie, HiHome } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import routes from "./dashboardRoutes";

const Leftbar = () => {
  const location = useLocation();

  return (
    <section className="col-span-2 bg-indigo-200 lg:p-4 md:p-4 p-2 rounded-lg">
      <ul className="flex gap-y-4  flex-col h-full">
        <li className="font-medium text-lg overflow-hidden text-ellipsis whitespace-nowrap flex gap-x-2 items-center">
          <HiChartPie className="lg:h-6 md:h-10 h-8 lg:w-6 md:w-10 w-8 lg:mx-0 md:mx-auto" />{" "}
          <span className="lg:inline-block hidden">Admin Dashboard</span>
        </li>
        <hr />

        {routes.map((route, index) => (
          <li key={index} className="py-1 rounded-lg">
            <Link
              to={route.anchor}
              className={`overflow-hidden text-ellipsis whitespace-nowrap flex gap-x-2 items-center ${
                location.pathname.includes(route.anchor) ? "font-bold" : null
              }`}
            >
              {route.icon}{" "}
              <span className="lg:inline-block hidden">{route.name}</span>
            </Link>
          </li>
        ))}

        {/* redirect to home route */}
        <li className="mt-auto">
          <Link
            to="/"
            className="overflow-hidden text-ellipsis whitespace-nowrap flex gap-x-1 items-center"
          >
            <HiHome className="lg:h-5 md:h-10 h-8 lg:w-5 md:w-10 w-8 lg:mx-0 md:mx-auto" />{" "}
            <span className="lg:inline-block hidden">Back to home</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Leftbar;

import React from "react";
import { Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const routes = [
    {
      name: "Categories",
      anchor: "/categories",
    },
    {
      name: "Stores",
      anchor: "/stores",
    },
    {
      name: "Brands",
      anchor: "/brands",
    },
    {
      name: "Dashboard",
      anchor: "/dashboard",
    },
    {
      name: "Blogs",
      anchor: "/blogs",
    },
  ];

  return (
    <header className="shadow">
      <nav className="container mx-auto">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="/">
            <img
              src="/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {routes.map((route, index) => (
              <Navbar.Link
                key={index}
                href={route.anchor}
                className={
                  location.pathname.includes(route.anchor) ? "font-bold" : null
                }
              >
                {route.name}
              </Navbar.Link>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </header>
  );
};

export default Header;

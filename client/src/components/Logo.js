import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={"/logo.png"}
        height={39}
        width={128}
        loading="lazy"
        alt="Canim Logo"
        title="Canim Logo"
        className="w-32 mx-auto object-cover"
      />
    </Link>
  );
};

export default Logo;

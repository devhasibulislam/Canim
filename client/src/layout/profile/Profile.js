import React from "react";
import { Outlet } from "react-router-dom";
import Leftbar from "./Leftbar";

const Profile = () => {
  return (
    <section className="grid grid-cols-12 p-3 gap-3 h-screen w-screen">
      <Leftbar />
      <div className="col-span-10 w-full bg-gray-100 rounded-lg p-4">
        <Outlet />
      </div>
    </section>
  );
};

export default Profile;

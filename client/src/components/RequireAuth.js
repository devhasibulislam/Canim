import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import persistMyAccount from "../redux/thunk/user/persistMyAccount";

const RequireAuth = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const roles = ["admin", "buyer", "seller", "supplier", "deliverer"];

  useEffect(() => {
    setLoading(false);
    dispatch(persistMyAccount());
  }, [dispatch]);

  if (loading) return "Loading...";

  return (
    <>
      {roles?.includes(user?.role) ? (
        children
      ) : (
        <span className="h-screen w-screen flex flex-col justify-center items-center bg-slate-200">
          401 unauthorized...
          <br />
          <Link
            to={"/account/sign-in"}
            className="hover:underline text-blue-500"
          >
            Sign in
          </Link>{" "}
        </span>
      )}
    </>
  );
};

export default RequireAuth;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Signin from "../../pages/main/account/Signin";
import persistMyAccount from "../../redux/thunk/user/persistMyAccount";

const AdminGuard = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(persistMyAccount());
  }, [dispatch]);

  return <>{user?.role === "admin" ? children : <Signin />}</>;
};

export default AdminGuard;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Signin from "../../pages/main/account/Signin";
import persistMyAccount from "../../redux/thunk/user/persistMyAccount";

const BuyerGuard = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(persistMyAccount());
  }, [dispatch]);

  return <>{user?.role === "buyer" ? children : <Signin />}</>;
};

export default BuyerGuard;

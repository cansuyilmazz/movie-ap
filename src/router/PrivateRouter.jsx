import React, { useContext } from "react";
import { AuthContex } from "../context/AuthContex";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContex);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

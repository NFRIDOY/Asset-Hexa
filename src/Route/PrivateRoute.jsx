/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../api/useAuth";
import Loader from "./loader";
import { selectCurrentToken } from "../features/authSlice";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  //todo: use token for private route
  const token = useSelector(selectCurrentToken);
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log(loading)
  if (loading) return <Loader />;
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace="true" />;
};

export default PrivateRoute;

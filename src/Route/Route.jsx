import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Errorpage from "../Pages/Errorpage/Errorpage";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Errorpage></Errorpage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
      ],
    },
  ]);
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/Home/About/About";
import HelpDesk from "../Components/HelpDesk/HelpDesk";
import Dashboard from "../Dashboard/Dashboard";
import OverView from "../Dashboard/OverView";
import Transection from "../Dashboard/Transection";
import Statistics from "../Dashboard/Statistics";
import Accounts from "../Dashboard/Accounts";
import Profile from "../Dashboard/Profile";
import PrivateRoute from "./PrivateRoute";
import AddBalance from "../Dashboard/Accounts/AddBalance/AddBalance";
import UpdateProfile from "../Dashboard/Accounts/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path:"/helpDesk",
        element:<HelpDesk></HelpDesk>
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "UpdateProfile",
    element: <UpdateProfile/>,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path:'dashboard',
    element:  
    <PrivateRoute>
      <Dashboard></Dashboard>

    </PrivateRoute>,
    children:[
      {
        path:'overView',
        element:<OverView></OverView>
      },
      {
        path:'transection',
        element:<Transection></Transection>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'accounts',
        element:<Accounts></Accounts>
      },
      {
        path:'addBalance',
        element:<AddBalance></AddBalance>
      },
      {
        path:'profile',
        element:
        
        <PrivateRoute>

          <Profile/>

        </PrivateRoute>
      },

    ]
  }
]);

/* eslint-disable no-unused-vars */
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
import AddBlog from "../Dashboard/AddBlog";
import UpdateProfile from "../Dashboard/Accounts/UpdateProfile";
import Blog from "../Pages/Blog/Blog";
import Investments from "../Dashboard/Investments/Investments";
// import Business from "../Components/Business/Business";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Businesses from "../Components/Businesses/Businesses";
import Payment from "../Components/Home/Payment/Payment";
import Business from "../Components/Business/Business";
import BusinessForm from "../Components/Business/BusinessForm";
import DashboardLayout from "../AdminDashboard/DashboardLayout";
import AdminOverview from "../AdminDashboard/AdminOverview";
import BlogVerification from "../AdminDashboard/BlogVerification";
import BusinessVerification from "../AdminDashboard/BusinessVerification";
import UserVarification from "../AdminDashboard/UserVarification";
import BusinessDetails from "../Components/BusinessDetails/BusinessDetails";
import UpdateBlog from "../Pages/Blog/UpdateBlog";
import SubscriptionList from "../Dashboard/SubscriptionList/SubscriptionList";
import { useGetBlogQuery } from "../features/blogSlice";
import AccountUpdate from "../Dashboard/Accounts/AccountModal/AccountUpdate";

import Budget from "../Dashboard/Budget/Budget";

import Pricing from "../Pages/Pricing/Pricing";
import Revenue from "../AdminDashboard/Revenue";


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
        path: "/helpDesk",
        element: <HelpDesk></HelpDesk>,
      },
      {
        path: "/Blogs",
        element: <Blog />,
        loader: () => fetch('https://asset-hexa-server.vercel.app/blogsCount')
        // loader: () => fetch(' http://localhost:5000/blogsCount')
      },

      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/businesses",
        element: <Businesses></Businesses>,
        loader: () => fetch('https://asset-hexa-server.vercel.app/bussinessCount')
      },
      {
        path: "/businessDetails/:id",
        element: <PrivateRoute><BusinessDetails></BusinessDetails></PrivateRoute>,
      },
      {
        path: "/newsPayment",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
      },
      {
        path: "/pricing",
        element: <PrivateRoute><Pricing></Pricing></PrivateRoute>,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },


  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "overView",
        element: <PrivateRoute><OverView></OverView></PrivateRoute>,
      },
      {
        path: "transection",
        element: <PrivateRoute><Transection></Transection></PrivateRoute>,
      },
      {
        path: "statistics",
        element: <PrivateRoute><Statistics></Statistics></PrivateRoute>,
      },
      {
        path: "accounts",
        element: <PrivateRoute><Accounts></Accounts></PrivateRoute>,
      },
      {
        path: "accountUpdate/:id",
        element: <PrivateRoute><AccountUpdate></AccountUpdate></PrivateRoute>,
      },

      {
        path: "addBalance",
        element: <PrivateRoute><AddBalance></AddBalance></PrivateRoute>,
      },
      {
        path: "addBlog",
        element: <PrivateRoute><AddBlog /></PrivateRoute>,
      },
      {
        path: "investments",
        element: <PrivateRoute><Investments></Investments></PrivateRoute>,
      },
      {
        path: "business",
        element: <PrivateRoute><Business></Business></PrivateRoute>,
        // element: <BusinessForm />,
      },
      {
        path: "businessForm",
        element: <PrivateRoute><BusinessForm /></PrivateRoute>,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      {
        path: "updateblogs/:id",
        element: <PrivateRoute><UpdateBlog /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://asset-hexa-server.vercel.app/blogs/${params.id}`)
      },

      {
        path: "UpdateProfile/:id",
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://asset-hexa-server.vercel.app/users/${params.id}`)
      },
      {
        path: "addBlog",
        element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>,
      },
      {
        path: "budget",
        element: <PrivateRoute><Budget></Budget></PrivateRoute>
      }
    ],
  },
  {
    path: "AdminDashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "AdminOverview",
        element: <PrivateRoute><AdminOverview></AdminOverview></PrivateRoute>,
      },
      {
        path: "BusinessVerification",
        element: <PrivateRoute><BusinessVerification></BusinessVerification></PrivateRoute>,
      },
      {
        path: "BlogVerification",
        element: <PrivateRoute><BlogVerification></BlogVerification></PrivateRoute>,
      },
      {
        path: "userVerification",
        element: <PrivateRoute><UserVarification></UserVarification></PrivateRoute>,
      },
      {
        path: "subscriptionList",
        element: <PrivateRoute><SubscriptionList></SubscriptionList></PrivateRoute>,
      },
      {
        path: "Revenue",
        element: <PrivateRoute><Revenue></Revenue></PrivateRoute>,
      },
    ],
  },
]);

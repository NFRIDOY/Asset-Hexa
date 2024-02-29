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
      },

      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/businesses",
        element: <Businesses></Businesses>,
      },
      {
        path: "/businessDetails/:id",
        element: <BusinessDetails></BusinessDetails>,
      },
      {
        path: "/newsPayment",
        element: <Payment></Payment>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
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
        element: <OverView></OverView>,
      },
      {
        path: "transection",
        element: <Transection></Transection>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "accounts",
        element: <Accounts></Accounts>,
      },
      {
        path: "accountUpdate/:id",
        element: <AccountUpdate></AccountUpdate>,
      },

      {
        path: "addBalance",
        element: <AddBalance></AddBalance>,
      },

      {
        path: "addBlog",
        element: <AddBlog />,
      },
      {
        path: "investments",
        element: <Investments></Investments>,
      },
      {
        path: "business",
        element: <Business></Business>,
        // element: <BusinessForm />,
      },
      {
        path: "businessForm",
        element: <BusinessForm />,
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
        element: <UpdateBlog />,
        loader: ({ params }) => fetch(`https://asset-hexa-server.vercel.app/blogs/${params.id}`)
      },

      {
        path: "UpdateProfile/:id",
        element: <UpdateProfile />,
        loader: ({ params }) => fetch(`https://asset-hexa-server.vercel.app/users/${params.id}`)
      },
      {
        path: "addBlog",
        element: <AddBlog></AddBlog>,
      },
    ],
  },
  {
    path: "AdminDashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "AdminOverview",
        element: <AdminOverview></AdminOverview>,
      },
      {
        path: "BusinessVerification",
        element: <BusinessVerification></BusinessVerification>,
      },
      {
        path: "BlogVerification",
        element: <BlogVerification></BlogVerification>,
      },
      {
        path: "userVerification",
        element: <UserVarification></UserVarification>,
      },
      {
        path: "subscriptionList",
        element: <SubscriptionList></SubscriptionList>,
      },
      {
        path: "Revenue",
        element: <Revenue></Revenue>,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import MainDashboardLayOut from "../MainLayOut/MainDashboardLayOut";
import PrivateRoutes from "./PrivateRoutes";
import BookAParcel from "../Pages/Dashboard/User/BookAParcel";
import MyParcels from "../Pages/Dashboard/User/MyParcels";
import MyProfile from "../Pages/Dashboard/User/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ],
  },
  {
    path: '/dashboard',
    element: <MainDashboardLayOut />,
    children: [
      {
        path: 'parcelBooking',
        element: <BookAParcel />
      },
      {
        path: 'myParcels',
        element: <MyParcels/>
      },
      {
        path: 'myProfile',
        element: <MyProfile/>
      }
    ]
  },
  {
    path: '/register',
    element: <Registration />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export default router

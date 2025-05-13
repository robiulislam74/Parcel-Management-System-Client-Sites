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
import Statistics from "../Pages/Dashboard/Admin/Statistics";
import AllDeliveryMen from "../Pages/Dashboard/Admin/AllDeliveryMen";
import AllParcels from "../Pages/Dashboard/Admin/AllParcels";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import useAdmin from "../Hooks/useAdmin";
import DashboardRedirect from "./DashboardRedirect";
import MyDeliveryList from "../Pages/Dashboard/DeliveryBoy/MyDeliveryList";
import MyReviews from "../Pages/Dashboard/DeliveryBoy/MyReviews";


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
      index: true,
      element: <DashboardRedirect /> // 👈 custom component for redirecting based on role
    },
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
      },
      // Admin Dasboard Routes
      {
        path: 'statistics',
        element: <Statistics/>
      },
      {
        path: 'allParcels',
        element: <AllParcels/>
      },
      {
        path: 'allUsers',
        element: <AllUsers/>
      },
      {
        path: 'allDeliveryMen',
        element: <AllDeliveryMen/>
      },
      // DeliveryMen Routes
      {
        path: 'deliveryList',
        element: <MyDeliveryList/>
      },
      {
        path: 'myReviews',
        element: <MyReviews/>
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

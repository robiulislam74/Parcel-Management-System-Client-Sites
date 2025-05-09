import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import MainDashboardLayOut from "../MainLayOut/MainDashboardLayOut";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/dashboard',
          element: <PrivateRoutes>
            <MainDashboardLayOut/>
          </PrivateRoutes>
        }
      ],
    },
    {
      path: '/register',
      element: <Registration/>
    },
    {
      path: '/login',
      element: <Login/>
    }
  ]);

  export default router
  
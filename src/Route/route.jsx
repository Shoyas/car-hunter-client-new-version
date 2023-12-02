import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";
import CarInfo from "../Component/CarInfo/CarInfo";
import Dashboard from "../Component/Dashboard/Dashboard";
import DashboardForAddCar from "../Component/Dashboard/AddCar/DashboardForAddCar";
import DashboardForMakeAdmin from "../Component/Dashboard/MakeAdmin/DashboardForMakeAdmin";
import DashboardForAdminList from "../Component/Dashboard/AdminList/DashboardForAdminList";
import Login from "../Component/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/add-car",
        element: <DashboardForAddCar />,
      },
      {
        path: "/make-admin",
        element: <DashboardForMakeAdmin />,
      },
      {
        path: "/admin-list",
        element: <DashboardForAdminList />,
      },
      {
        path: "/car-information/:_id",
        element: <CarInfo />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

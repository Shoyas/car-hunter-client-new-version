import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";
import CarInfo from "../Component/CarInfo/CarInfo";

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
        path: "/car-information/:_id",
        element: <CarInfo />,
      },
    ],
  },
]);

export default router;

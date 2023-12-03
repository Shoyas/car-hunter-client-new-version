import { Link } from "react-router-dom";
import Navigation from "../Home/Header/Navigation/Navigation";
import { useContext } from "react";
import { AuthContext } from "./../../Providers/AuthProviders";

const Dashboard = () => {
  const [loggedInUser] = useContext(AuthContext);
  return (
    <div>
      <div className="md:container md:mx-auto">
        <Navigation />
      </div>
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col justify-start mt-5 ml-5">
            <h1 className="text-3xl">
              Welcome back <br /> {loggedInUser.name}
            </h1>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open Sidebar Menu
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <Link to="/add-car" className="text-xl">
                  Add New Car Info
                </Link>
              </li>
              <li>
                <Link to="/make-admin" className="text-xl">
                  Make Admin
                </Link>
              </li>
              <li>
                <Link to="/admin-list" className="text-xl">
                  Admin List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

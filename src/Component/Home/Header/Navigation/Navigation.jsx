import { Link } from "react-router-dom";
import logo from "../../../../assets/image/New/carts/partner-2.png";

const Navigation = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/home">Home</Link>
            </li>
            {/* {loggedInUser && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )} */}

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img
            className="w-16 md:w-32 lg:w-48"
            id="main-logo"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button type="button" className="btn">
          LogOut
        </button>
        <Link to="/login" className="btn ml-5">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

import { Link } from "react-router-dom";
import logo from "../../../../assets/image/New/carts/partner-2.png";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../Login/firebase.config";

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
  console.log("User", loggedInUser);

  const auth = getAuth(app);
  const handleLogOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setLoggedInUser(null);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  return (
    <div className="navbar bg-neutral mb-16">
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
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800 rounded-box w-52">
            <li>
              <Link to="/home" className="text-xl btn btn-primary mt-2 mb-2">
                Home
              </Link>
            </li>
            {loggedInUser && (
              <li>
                <Link
                  to="/dashboard"
                  className="text-xl btn btn-primary mt-2 mb-2"
                >
                  Dashboard
                </Link>
              </li>
            )}
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
            <Link to="/home" className="text-xl btn btn-primary ml-5 mr-5">
              Home
            </Link>
          </li>
          {loggedInUser && (
            <li>
              <Link
                to="/dashboard"
                className="text-xl btn btn-primary ml-5 mr-5"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {loggedInUser ? (
          <button
            onClick={handleLogOut}
            type="button"
            className="btn  btn-primary"
          >
            LogOut
          </button>
        ) : (
          <Link to="/login" className="btn  btn-primary">
            Login
          </Link>
        )}
        <h2 className="text-neutral-50 md:ml-2">
          {loggedInUser && <span>{loggedInUser.name}</span>}
        </h2>
      </div>
    </div>
  );
};

export default Navigation;

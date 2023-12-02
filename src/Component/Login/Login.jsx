import { Link, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../Home/Header/Navigation/Navigation";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase.config";
import logo from "./../../assets/image/New/carts/partner-2.png";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);

  const history = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const auth = getAuth(app);
  console.log("User: ", loggedInUser);
  const provider = new GoogleAuthProvider();
  const ClickForGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);

        history(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:container md:mx-auto login-area">
      <Navigation />
      <div className="flex justify-center items-center mt-20">
        <img className="logo-img" src={logo} alt="Car Hunter" />
      </div>

      <div className="login-popup text-center mt-5">
        <br />
        <br />
        <br />
        <h5 className="text-xl">Login With</h5>

        <button onClick={ClickForGoogleSignIn} className="btn btn-primary mt-5">
          Continue with Google
        </button>

        <br />
        <br />
        <h6>
          Don't have an account ?{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Create an account
          </Link>{" "}
        </h6>
      </div>
    </div>
  );
};

export default Login;

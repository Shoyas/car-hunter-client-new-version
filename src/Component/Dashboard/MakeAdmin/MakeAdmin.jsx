import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createAdmin } from "../../../redux/features/carSlice";

const MakeAdmin = () => {
  const dispatch = useDispatch();
  const [makeAdmin, setMakeAdmin] = useState({});
  const handleInputAdmin = (e) => {
    setMakeAdmin({
      ...makeAdmin,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddAdmin = (e) => {
    e.preventDefault();
    console.log("Make admin: ", makeAdmin);
    dispatch(createAdmin(makeAdmin));
  };
  return (
    <div>
      <form>
        <label className="form-control w-96 max-w-xs">
          <div className="label">
            <span className="label-text text-xl">
              <strong>Make Admin</strong>
            </span>
          </div>
          <input
            type="email"
            placeholder="Enter Email"
            className="input input-bordered max-w-xs w-80"
            name="email"
            onBlur={handleInputAdmin}
          />
        </label>
        <button
          className="btn btn-active btn-primary mb-5 mt-5"
          onClick={handleAddAdmin}
        >
          <Link to="/home">Add Admin</Link>
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminInfo } from "../../../redux/features/carSlice";

const AdminList = () => {
  const dispatch = useDispatch();
  const adminInformation = useSelector((state) => state.car.adminInfo);
  const status = useSelector((state) => state.car.status);
  const error = useSelector((state) => state.car.error);

  useEffect(() => {
    dispatch(getAdminInfo());
  }, [dispatch]);

  console.log("Admin: ", adminInformation);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {adminInformation.map((admin, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{admin.email}</td>
              <td>
                {new Date(admin.createDate).toLocaleString("en-GB", {
                  day: "numeric",
                  month: "numeric",
                  year: "2-digit",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </td>
              <td>{<button className="btn btn-primary">Delete</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // <div>
    //   <h1>Admin</h1>
    // </div>
  );
};

export default AdminList;

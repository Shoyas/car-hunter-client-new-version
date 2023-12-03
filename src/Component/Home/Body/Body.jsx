import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarInfo } from "../../../redux/features/carSlice";
import { Link } from "react-router-dom";
import "./Body.css";
import spinner from "../../../assets/image/Spinner-1s-200px.gif";

const Body = () => {
  const dispatch = useDispatch();
  const carInformation = useSelector((state) => state.car.carInformation);
  const status = useSelector((state) => state.car.status);
  const error = useSelector((state) => state.car.error);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getAllCarInfo());
  }, [dispatch]);

  const renderCarInformation = () => {
    if (status === "loading") {
      return (
        <div className="flex justify-center">
          <div className="spinner-position">
            <img src={spinner} alt="" />
          </div>
        </div>
      );
    } else if (error === "failed") {
      <div className="spinner-position">
        <h1 className="md:text-3xl">This component can't showing data</h1>
      </div>;
    } else {
      return carInformation
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((car) => (
          <div
            key={car._id}
            className="grid gap-x-8 gap-y-4  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
          >
            <div className="card card-compact xl:w-80 lg:w-64 md:w-80 sm:w-96 bg-base-100 shadow-xl">
              <figure>
                {car.image ? (
                  <img
                    className="card-img"
                    src={`data:image/png;base64,${car.image.img}`}
                    alt={car.name}
                  />
                ) : (
                  <img className="card-img" src={car.image} alt={car.name} />
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{car.name}</h2>
                <p>
                  {" "}
                  {car.description.length > 150
                    ? `${car.description.slice(0, 150)}...`
                    : car.description}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/car-information/${car._id}`}
                    className="btn btn-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ));
    }
  };

  return (
    <>
      <div className="md:flex md:justify-center md:items-center">
        <div className="md:w-1/2 p-5">
          <div className="mb-5">
            <input
              className="w-full border rounded p-2"
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {renderCarInformation()}
      </div>
    </>
  );
};

export default Body;

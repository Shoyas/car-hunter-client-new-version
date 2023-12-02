import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCar,
  getSingleCarInfo,
  updateCar,
} from "../../redux/features/carSlice";
import { Link, useParams } from "react-router-dom";
import "./CarInfo.css";
import Navigation from "../Home/Header/Navigation/Navigation";
import spinner from "../../assets/image/Spinner-1s-200px.gif";

const CarInfo = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [updateCarInfo, setUpdateCarInfo] = useState({
    name: "",
    description: "",
  });

  const dispatch = useDispatch();
  const { _id } = useParams();
  const singleCarInfo = useSelector((state) => state.car.singleCarInformation);
  const status = useSelector((state) => state.car.status);
  // const error = useSelector((state) => state.car.error);

  useEffect(() => {
    dispatch(getSingleCarInfo(_id));
  }, [dispatch, _id]);
  console.log("objectID: ", singleCarInfo);

  if (status === "loading" || singleCarInfo.length === 0) {
    return (
      <div className="flex justify-center">
        <div className="spinner-position">
          <img src={spinner} alt="" />
        </div>
      </div>
    );
  }

  const toggle = (_id) => {
    // for toggle state
    setIsOpened((wasOpened) => !wasOpened);
    dispatch(getSingleCarInfo(_id));
  };

  const handleUpdateValue = (updateValue) => {
    updateValue.preventDefault();
    const newUpdate = { ...updateCarInfo };
    newUpdate[updateValue.target.name] = updateValue.target.value;
    setUpdateCarInfo(newUpdate);
  };

  const submitUpdate = () => {
    const { name, description } = updateCarInfo;
    dispatch(updateCar({ _id, name, description }));
  };

  // Delete carBrand function's code
  const deleteCarBrand = (_id) => {
    dispatch(deleteCar(_id));
  };

  return (
    <div className="md:container md:mx-auto">
      <Navigation />
      <div className="hero min-h-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {singleCarInfo.image ? (
            <img
              className="max-w-sm rounded-lg shadow-2xl"
              src={`data:image/png;base64,${singleCarInfo.image.img}`}
            />
          ) : (
            ""
          )}
          <div>
            <h1 className="text-5xl font-bold">{singleCarInfo.name}</h1>
            <p className="py-6 md:text-2xl">{singleCarInfo.description}</p>
            <Link to="/home">
              <button className="btn btn-primary">OK</button>
            </Link>
            <button
              className="btn btn-primary ml-5 mr-5"
              onClick={() => deleteCarBrand(`${singleCarInfo?._id}`)}
            >
              <Link to="/home">Delete</Link>
            </button>
            <button
              className="btn btn-primary"
              onClick={() => toggle(`${singleCarInfo?._id}`)}
            >
              Update
            </button>
          </div>
        </div>
      </div>

      {isOpened && (
        <div>
          <h3 className="md:text-xl">Update: {singleCarInfo?.name}</h3>
          <br />
          <br />
          <form>
            <input
              type="text"
              className="custom-textarea"
              placeholder="Enter Brand Name"
              defaultValue={singleCarInfo?.name}
              name="name"
              onBlur={handleUpdateValue}
            />
            <br />
            <br />
            <textarea
              className="custom-textarea"
              id="exampleFormControlTextarea1"
              rows="10"
              placeholder="Description about brand"
              onBlur={handleUpdateValue}
              defaultValue={singleCarInfo?.description}
              name="description"
            ></textarea>
            <br />
            <br />
            <button className="btn btn-danger mb-5" onClick={submitUpdate}>
              <Link to="/home">Submit</Link>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CarInfo;

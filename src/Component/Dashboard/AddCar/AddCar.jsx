import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCar } from "../../../redux/features/carSlice";
import { Link } from "react-router-dom";

const AddCar = () => {
  const dispatch = useDispatch();
  const [carData, setCarData] = useState({});

  const handleInputChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setCarData({
      ...carData,
      file: e.target.files[0],
    });
  };

  const handleAddCar = () => {
    const formData = new FormData();
    formData.append("file", carData.file);
    formData.append("name", carData.name);
    formData.append("description", carData.description);

    dispatch(addNewCar(formData));
  };

  return (
    <div>
      <form>
        <label className="form-control w-full max-w-xs mt-5">
          <div className="label">
            <span className="label-text text-xl">
              <strong>Brand Name</strong>
            </span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Type Name"
            className="input input-bordered w-full max-w-xs"
            onBlur={handleInputChange}
          />
        </label>
        <label className="form-control w-full max-w-xs mt-5">
          <div className="label">
            <span className="label-text text-xl">
              <strong>Enter description about brand</strong>
            </span>
          </div>

          <textarea
            className="textarea textarea-bordered w-full max-w-xs"
            placeholder="Description about brand"
            rows="10"
            name="description"
            onBlur={handleInputChange}
          ></textarea>
        </label>

        <label className="form-control w-full max-w-xs mt-5">
          <div className="label">
            <span className="label-text text-xl">
              <strong>Choose brand's image</strong>
            </span>
          </div>
          <input
            type="file"
            id="exampleFormControlFile1"
            name="image"
            onChange={handleFileChange}
          />
        </label>

        <button
          className="btn btn-active btn-primary mb-5 mt-5"
          onClick={handleAddCar}
        >
          <Link to="/home">Add New Brand</Link>
        </button>
      </form>
    </div>
  );
};

export default AddCar;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCarInfo } from "../../redux/features/carSlice";
import { useParams } from "react-router-dom";

const CarInfo = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const singleCarInfo = useSelector((state) => state.car.singleCarInformation);
  const status = useSelector((state) => state.car.status);
  const error = useSelector((state) => state.car.error);

  useEffect(() => {
    dispatch(getSingleCarInfo(_id));
  }, [dispatch, _id]);
  console.log("objectID: ", singleCarInfo);

  if (status === "loading" || singleCarInfo.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{singleCarInfo[0].name}</h1>
    </div>
  );
};

export default CarInfo;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const api = "https://car-info-redux-server.onrender.com";

export const getAllCarInfo = createAsyncThunk("car/getAllCarInfo", async () => {
  try {
    const response = await fetch(`${api}/allCarList`);
    if (!response.ok) {
      throw new Error("Failed to fetch car information");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
});

export const getSingleCarInfo = createAsyncThunk(
  "car/getSingleCarInfo",
  async (_id) => {
    try {
      const response = await fetch(`${api}/loadCar/${_id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch this car information");
      }
      const data = await response.json();
      console.log("Single car info: ", data);
      return data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
);

const carSlice = createSlice({
  name: "car",
  initialState: {
    carInformation: [],
    singleCarInformation: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get All Car Information
    builder
      .addCase(getAllCarInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCarInfo.fulfilled, (state, action) => {
        state.status = "success";
        state.carInformation = action.payload;
      })
      .addCase(getAllCarInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Get Single Car Information
    builder
      .addCase(getSingleCarInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSingleCarInfo.fulfilled, (state, action) => {
        state.status = "success";
        state.carInformation = action.payload;
      })
      .addCase(getSingleCarInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default carSlice.reducer;

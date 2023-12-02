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
      return data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
);

export const updateCar = createAsyncThunk(
  "car/updateCar",
  async ({ _id, name, description }) => {
    try {
      const response = await fetch(`${api}/updateCar/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });
      if (!response.ok) {
        throw new Error("Failed to update car information");
      }
      const data = await response.json();
      console.log("Updated car info: ", data);
      return data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
);

export const deleteCar = createAsyncThunk("car/deleteCar", async (_id) => {
  try {
    const response = await fetch(`${api}/deleteCar/${_id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete car information");
    }
    const data = await response.json();
    console.log("Deleted car info: ", data);
    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
});

export const addNewCar = createAsyncThunk("car/addNewCar", async (formData) => {
  try {
    const response = await fetch(`${api}/addCarDetail`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to add new car");
    }

    const data = await response.json();
    console.log("New car added: ", data);
    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
});

export const createAdmin = createAsyncThunk("car/makeAdmin", async (admin) => {
  try {
    const response = await fetch(`${api}/makeAdmin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    });
    if (!response.ok) {
      throw new Error("Failed to make admin");
    }
    const data = await response.json();
    console.log("Admin created: ", data);
    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
});

export const getAdminInfo = createAsyncThunk("car/getAdmin", async () => {
  try {
    const response = await fetch(`${api}/getAdmin`);
    console.log("Admin data response: ", response);
    if (!response.ok) {
      throw new Error("Failed to get admin");
    }
    const data = await response.json();
    console.log("Admin data: ", data);
    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
});

const carSlice = createSlice({
  name: "car",
  initialState: {
    carInformation: [],
    singleCarInformation: [],
    adminInfo: [],
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
        state.singleCarInformation = action.payload;
      })
      .addCase(getSingleCarInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Update Single Car Information
    builder
      .addCase(updateCar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        state.status = "success";
        state.singleCarInformation = action.payload;
      })
      .addCase(updateCar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Delete Car
    builder
      .addCase(deleteCar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.status = "success";
        state.singleCarInformation = action.payload;
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // Add New Car
    builder
      .addCase(addNewCar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNewCar.fulfilled, (state, action) => {
        state.status = "success";
        state.carInformation.push(action.payload);
      })
      .addCase(addNewCar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Make Admin
    builder
      .addCase(createAdmin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createAdmin.fulfilled, (state, action) => {
        state.status = "success";
        state.adminInfo = action.payload;
      })
      .addCase(createAdmin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Get Admin
    builder
      .addCase(getAdminInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAdminInfo.fulfilled, (state, action) => {
        state.status = "success";
        state.adminInfo = action.payload;
      })
      .addCase(getAdminInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default carSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "/src/config/API";

export const fetchBlogs = createAsyncThunk(
    "products/getproducts",
    async (_, { rejectWithValue }) => {
      try {
        let res = await API.get("/products");
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message || "Error fetching");
      }
    }
  );
  export const fetchById = createAsyncThunk(
    "products/getById",
    async (Id, { rejectWithValue }) => {
      try {
        let res = await API.get(`/products/${Id}`);
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message || "Error fetching");
      }
    }
  );
  
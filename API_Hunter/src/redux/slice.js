import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '/src/config/API';

export const fetchBlogs = createAsyncThunk('products/getProducts', async (_, { rejectWithValue }) => {
  try {
    const res = await API.get('/products');
    if (!Array.isArray(res.data)) {
      throw new Error('API response is not an array');
    }
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message || 'Error fetching products');
  }
});

export const addProduct = createAsyncThunk('products/addProduct', async (product, { rejectWithValue }) => {
  try {
    const res = await API.post('/products', product);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message || 'Error adding product');
  }
});

export const updateProduct = createAsyncThunk('products/updateProduct', async ({ id, product }, { rejectWithValue }) => {
  try {
    const res = await API.put(`/products/${id}`, product);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message || 'Error updating product');
  }
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id, { rejectWithValue }) => {
  try {
    await API.delete(`/products/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(error.message || 'Error deleting product');
  }
});

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.products = state.products.map((product) => product.id === action.payload.id ? action.payload : product);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
      });
  },
});

export const productReducer = productSlice.reducer;
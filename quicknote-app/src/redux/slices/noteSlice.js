import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
    loading: false
  },
  reducers: {
    setNotes: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setNotes, setLoading } = noteSlice.actions;
export default noteSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  image: null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setImage, setLoading } = imageSlice.actions;

export default imageSlice.reducer;

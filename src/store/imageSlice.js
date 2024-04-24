import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  image: null,
  noImage: true,
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
    setNoImage: (state, action) => {
      state.noImage = action.payload;
    },
  },
});

export const { setImage, setLoading, setNoImage } = imageSlice.actions;

export default imageSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'
import photosApi from '../api/photos';

const initialState = {
    photos: [],
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(
        photosApi.endpoints.getAllPhotos.matchFulfilled,
        (state, { payload }) => {
            state.photos = payload;             
        }
    );
},
})

export default photosSlice.reducer
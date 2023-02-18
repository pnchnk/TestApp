import { configureStore } from '@reduxjs/toolkit'
import photosReducer from './slices/photosSlice'
import { photosApi } from './api/photos'

export const store = configureStore({
  reducer: {
    photos: photosReducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photosApi.middleware),
})

export default store;
const API_KEY = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/' }),
  endpoints: (builder) => ({
    getAllPhotos: builder.query({
        query: () => `photos/?client_id=${API_KEY}`,
    }),
  }),
})

export const { useGetAllPhotosQuery } = photosApi;

export default photosApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {baseUrl} from '../constant'

export const pagesApi = createApi({
  reducerPath: 'pagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPagesByName: builder.query({
      query: () => '/pages',
    }),
  }),
})

export const { useGetPagesByNameQuery } = pagesApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {baseUrl} from '../constant'

export const stickersApi = createApi({
  reducerPath: 'stickersApi',
  tagTypes: ['stickers'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getStickersByName: builder.query({
      query: () => '/stickers',
    }),
    addStickerByName: builder.mutation({
        query: (body) => ({
            url: '/stickers',
            method: "POST",
            headers: {"Content-type": "appliation/json"},
            body: JSON.stringify(body)
        }),
        invalidatesTags: ['stickers']
    })
  }),
})

export const { useGetStickersByNameQuery, useAddStickerByNameMutation } = stickersApi
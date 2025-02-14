import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pagesApi } from '../services/pagesApi'
import { stickersApi } from '../services/stickersApi'


export const store = configureStore({
  reducer: {
    [pagesApi.reducerPath]: pagesApi.reducer,
    [stickersApi.reducerPath]: stickersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pagesApi.middleware,
      stickersApi.middleware
    ),
})

setupListeners(store.dispatch)

import { configureStore } from '@reduxjs/toolkit'
import api from './services/api'
import uiReducer from './modules/uiSlice'

export const storeApp = configureStore({
  reducer: {
    ui: uiReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof storeApp.getState>
export type AppDispatch = typeof storeApp.dispatch

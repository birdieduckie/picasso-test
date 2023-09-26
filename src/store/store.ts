import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { postApi } from 'shared/api/index'

const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'
import bookingReducer from './bookingSlice.js'

// redux-persist needs a storage object with getItem, setItem and removeItem.
// This small adapter uses browser localStorage directly and avoids Vite import issues.
const localStorageAdapter = {
  getItem(key) {
    return Promise.resolve(localStorage.getItem(key))
  },
  setItem(key, value) {
    return Promise.resolve(localStorage.setItem(key, value))
  },
  removeItem(key) {
    return Promise.resolve(localStorage.removeItem(key))
  },
}

// This config tells redux-persist where and what to save.
// localStorageAdapter saves the booking slice in browser localStorage.
const bookingPersistConfig = {
  key: 'booking',
  storage: localStorageAdapter,
}

const persistedBookingReducer = persistReducer(bookingPersistConfig, bookingReducer)

export const store = configureStore({
  reducer: {
    booking: persistedBookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // redux-persist dispatches a few non-serializable internal actions.
      // These ignored actions prevent Redux Toolkit warnings while keeping checks enabled.
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// persistor controls saving and loading persisted Redux state.
export const persistor = persistStore(store)

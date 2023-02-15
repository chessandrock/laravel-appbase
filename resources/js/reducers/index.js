import { combineReducers } from 'redux'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'

import auth from './auth'
import value from './value'

const allReducers = combineReducers({
  auth,
  value
})

const persistConfig = {
  storage,
  key: 'root',
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(thunk)
})

export const persistor = persistStore(store)

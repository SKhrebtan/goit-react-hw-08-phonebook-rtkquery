import { configureStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { myFilterSlice } from './myFilterSlice/myFilterSlice';
import { authReducer } from 'redux/auth/slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { contactsApi } from './rtkquerySlice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        filter: myFilterSlice.reducer,
        auth: persistReducer(authPersistConfig, authReducer),
        [contactsApi.reducerPath]: contactsApi.reducer,
  },
         middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
    
    }).concat(contactsApi.middleware);
  },
   }, applyMiddleware(thunk))

 export const persistor = persistStore(store)


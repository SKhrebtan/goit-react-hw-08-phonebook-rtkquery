import { configureStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { myFilterSlice } from './myFilterSlice/myFilterSlice';
import { myContactsSlice } from './contactsThunk/contactsSlice';
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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        contacts: myContactsSlice.reducer,
        filter: myFilterSlice.reducer,
        auth: persistReducer(authPersistConfig, authReducer),
  },
         middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
}, applyMiddleware(thunk))

 export const persistor = persistStore(store)


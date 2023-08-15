import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './myContactsSlice/myContactsSlice';
import { myFilterSlice } from './myFilterSlice/myFilterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'





export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: myFilterSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
})
 export const persistor = persistStore(store)

// const myContactsSlice = createSlice({
//     name: 'contacts',
//     initialState: [],
//     reducers: {
//         add(state, action) {
//             state.push(action.payload)
//         },
//         remove(state, action) {
//             return state.filter(contact => contact.id !== action.payload)
//         }
//     }
// })

// export const { add, remove } = myContactsSlice.actions;


// const myFilterSlice = createSlice({
//     name: 'filter',
//     initialState: { value: '' },
//     reducers: {
//         filter(state, {payload}) {
//             state.value = payload
//             }
//     }
// })

// export const { filter } = myFilterSlice.actions;
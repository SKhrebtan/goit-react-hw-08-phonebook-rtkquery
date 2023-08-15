import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
}




 const myContactsSlice = createSlice({
    name: 'contacts',
     initialState: { items: [] },
    reducers: {
        add(state, {payload}) {
            state.items.push(payload)
        },
        remove(state, {payload}) {
            state.items = state.items.filter(item => item.id !== payload);
        }
    }
})

export const persistedReducer = persistReducer(persistConfig, myContactsSlice.reducer)

export const { add, remove } = myContactsSlice.actions;

export const getContacts = state => state.contacts.items;

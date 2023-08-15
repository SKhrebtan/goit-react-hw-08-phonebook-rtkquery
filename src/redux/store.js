import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const myContactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { add, remove } = myContactsSlice.actions;


const myFilterSlice = createSlice({
    name: 'filter',
    initialState: { value: '' },
    reducers: {
        filter(state, {payload}) {
            state.value = payload
            }
    }
})

export const { filter } = myFilterSlice.actions;

export const store = configureStore({
    reducer: {
        contacts: myContactsSlice.reducer,
        filter: myFilterSlice.reducer,
  },
})
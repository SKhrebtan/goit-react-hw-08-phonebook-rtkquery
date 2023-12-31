export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUser = state => state.auth.user;

export const getRefreshing = state => state.auth.isRefreshing;

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter.value;

export const getError = state => state.auth.error;

export const getPending = state => state.auth.pending;


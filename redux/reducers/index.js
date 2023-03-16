import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';

import {AddUserDetails} from './AddUserDetailsReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  addUserDetails: AddUserDetails,
});

const rootReducer = (state, action) => {
  // INFO: clear all data in redux store to initial.
  if (action.type === 'USER_LOGOUT') {
    AsyncStorage.removeItem('persist:root');
    state = {};
  }

  // if (action.type === 'CLEAR_ALL_DATA') {
  //   AsyncStorage.removeItem('persist:root');

  //   state = {appleLoginReducer: []};
  // } else if (action.type === 'USER_LOGOUT') {
  //   const appleLoginState = state.appleLoginReducer;

  //   AsyncStorage.removeItem('persist:root');
  //   // state = [];
  //   // AsyncStorage.clear();
  //   state = {appleLoginReducer: appleLoginState};
  // }

  return appReducer(state, action);
};

let persistedReducer = persistReducer(persistConfig, rootReducer);
let store = configureStore({
  reducer: persistedReducer,
  devTools: true, // NOTE: only for development environment
  middleware: [thunk],
});

let persistor = persistStore(store);

export {store, persistor};

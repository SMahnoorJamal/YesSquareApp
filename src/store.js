// store.js
// import { createStore, combineReducers } from 'redux';
// import placeReducer from '../src/reducer/placeReducer';
// const rootReducer = combineReducers({
//   places: placeReducer
// });
// const configureStore = () => {
//   return createStore(rootReducer);
// }
// export default configureStore;

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistStore, persistReducer } from 'redux-persist'

// import todoReducer from './reducers';
// import { createStore } from 'redux'
// import storage from 'redux-persist/lib/storage' 

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// }

// const persistedReducer = persistReducer(persistConfig, todoReducer)

// export const store = createStore(persistedReducer)
// export const persistor = persistStore(store)

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import placeReducer from '../src/reducer/placeReducer';
import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, placeReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
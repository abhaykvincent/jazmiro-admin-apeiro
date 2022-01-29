import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';

//Redux 
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import productReducer from './features/products'
import historyReducer from './features/history'

//Store
const store = configureStore({
  reducer: {
    products: productReducer,
    history: historyReducer
  },
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

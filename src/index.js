import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import { rootReducer } from './Redux/combinerReducer';
import logger from "redux-logger";
import "../src/generalStyles/generalStyles.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


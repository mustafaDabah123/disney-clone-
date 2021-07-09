import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { persistStore } from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react';
// persistor to save data at local storage 
let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate persistor={persistor}>
         <App  />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

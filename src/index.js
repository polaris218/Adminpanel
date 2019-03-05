import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import configureStore from './store/configureStore';
import './index.scss';

const initialState = {
  users: [],
  senders: [],
  couriers: [],
  admin: [],
  panel: 'Sender',
  userDetail: null,
  admininfo: null,
  createadmin: null,
  financy: [],
  city: [],
};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.querySelector('#root')
);
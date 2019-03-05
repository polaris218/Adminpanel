import { takeLatest } from 'redux-saga/effects';

import {
  SENDERS_DATA_WATCHER,
  SENDER_DATA_WATCHER,
  USER_DATA_BYID_WATCHER,
  SET_PANEL_CONTENTS_WATCHER,
  ADMIN_DATA_WATCHER,
  ADMIN_DATA_BYID_WATCHER,
  ADMIN_DATA_UPDATE_WATCHER,
  ADMIN_CREATE_WATCHER,
  ADMIN_CREATE_SUCCESS_WATCHER,
  COURIERS_DATA_WATCHER,
  GET_FINANCIAL_LIST_WATCHER,
  GET_CITY_LIST_WATCHER,
  UPDATE_USER_DATA_WATCHER,
} from '../constants';
import {
  getSendersData,
  getCouriersData,
  getSenderDataByFilter,
  getUserById,
  getAdminData,
  getAdminDataById,
  updateAdminData,
  createAdmin,
  getFinancialList,
  getCityList,
  updateUserData,
} from './funcgen';
import {
  setPanelContentsWithTitle,
  setAdminCreatedSuccess,
} from './function';

export default function* sagaWatchers() {
  yield takeLatest(SENDERS_DATA_WATCHER, getSendersData);
  yield takeLatest(COURIERS_DATA_WATCHER, getCouriersData);
  yield takeLatest(SENDER_DATA_WATCHER, getSenderDataByFilter);
  yield takeLatest(USER_DATA_BYID_WATCHER, getUserById);
  yield takeLatest(SET_PANEL_CONTENTS_WATCHER, setPanelContentsWithTitle);
  yield takeLatest(ADMIN_DATA_WATCHER, getAdminData);
  yield takeLatest(ADMIN_DATA_BYID_WATCHER, getAdminDataById);
  yield takeLatest(ADMIN_DATA_UPDATE_WATCHER, updateAdminData);
  yield takeLatest(ADMIN_CREATE_WATCHER, createAdmin);
  yield takeLatest(ADMIN_CREATE_SUCCESS_WATCHER, setAdminCreatedSuccess);
  yield takeLatest(GET_FINANCIAL_LIST_WATCHER, getFinancialList);
  yield takeLatest(GET_CITY_LIST_WATCHER, getCityList);
  yield takeLatest(UPDATE_USER_DATA_WATCHER, updateUserData);
};
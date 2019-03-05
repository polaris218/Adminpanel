import {
  SENDERS_DATA_WATCHER,
  COURIERS_DATA_WATCHER,
  SENDER_DATA_WATCHER,
  USER_DATA_BYID_WATCHER,
  SET_PANEL_CONTENTS_WATCHER,
  ADMIN_DATA_WATCHER,
  ADMIN_DATA_BYID_WATCHER,
  ADMIN_DATA_UPDATE_WATCHER,
  ADMIN_CREATE_WATCHER,
  ADMIN_CREATE_SUCCESS_WATCHER,
  GET_FINANCIAL_LIST_WATCHER,
  GET_CITY_LIST_WATCHER,
  UPDATE_USER_DATA_WATCHER,
} from '../constants'

export function getSendersDataWatcher() {
  return { type: SENDERS_DATA_WATCHER };
};
export function getCouriersDataWatcher() {
  return { type: COURIERS_DATA_WATCHER };
};
export function getSenderDataWatcher(actions) {
  return { type: SENDER_DATA_WATCHER, payload: actions };
};
export function getUserDataByIdWatcher(ID) {
  return { type: USER_DATA_BYID_WATCHER, payload: ID };
};
export function setPanelWatcher(title) {
  return { type: SET_PANEL_CONTENTS_WATCHER, payload: title };
};
export function getAdminDataWatcher() {
  return { type: ADMIN_DATA_WATCHER };
};
export function getAdminDataByIdWatcher(ID) {
  return { type: ADMIN_DATA_BYID_WATCHER, payload: ID };
};
export function updateAdminDataUpdateWatcher(data) {
  return { type: ADMIN_DATA_UPDATE_WATCHER, payload: data };
};
export function createNewAdminWatcher(data) {
  return { type: ADMIN_CREATE_WATCHER, payload: data };
};
export function setAdminCreatedSuccess() {
  return { type: ADMIN_CREATE_SUCCESS_WATCHER };
};
export function getFinancialListWatcher(params) {
  return { type: GET_FINANCIAL_LIST_WATCHER, payload: params };
};
export function getCityListWatcher() {
  return { type: GET_CITY_LIST_WATCHER };
};
export function updateUserDataWatcher(data) {
  return { type: UPDATE_USER_DATA_WATCHER, payload: data };
}

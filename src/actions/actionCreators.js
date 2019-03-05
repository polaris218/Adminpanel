import {
  SENDERS_DATA_ASYNC,
  COURIERS_DATA_ASYNC,
  SENDER_DATA_ASYNC,
  USER_DATA_BYID_ASYNC,
  SET_PANEL_CONTENTS_ASYNC,
  ADMIN_DATA_ASYNC,
  ADMIN_DATA_BYID_ASYNC,
  ADMIN_DATA_UPDATE_ASYNC,
  ADMIN_CREATED_SUCCESS,
  GET_FINANCIAL_LIST_ASYNC,
  GET_CITY_LIST_ASYNC,
  UPDATE_USER_DATA_ASYNC,
} from "../constants";

export function senders(data) {
  return { type: SENDERS_DATA_ASYNC, payload: data };
};
export function couriers(data) {
  return { type: COURIERS_DATA_ASYNC, payload: data };
};
export function sender(data) {
  return { type: SENDER_DATA_ASYNC, payload: data };
};
export function userInfo(data) {
  return { type: USER_DATA_BYID_ASYNC, payload: data };
};
export function setPanelContents(data) {
  return { type: SET_PANEL_CONTENTS_ASYNC, payload: data };
};
export function setAdminDataAsync(data) {
  return { type: ADMIN_DATA_ASYNC, payload: data };
};
export function adminInfoAsync(data) {
  return { type: ADMIN_DATA_BYID_ASYNC, payload: data };
};
export function adminInfoUpdateAsync(data) {
  return { type: ADMIN_DATA_UPDATE_ASYNC, payload: data };
};
export function adminCreateSuccess() {
  return { type: ADMIN_CREATED_SUCCESS };
};
export function getFinancialListAsync(data) {
  return { type: GET_FINANCIAL_LIST_ASYNC, payload: data };
};
export function getCityListAsync(data) {
  return { type: GET_CITY_LIST_ASYNC, payload: data };
};
export function updateUserDataAsync(data) {
  return { type: UPDATE_USER_DATA_ASYNC, payload: data };
}
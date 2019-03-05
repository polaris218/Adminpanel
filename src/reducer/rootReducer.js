import {
  SENDERS_DATA_ASYNC,
  SENDER_DATA_BYID_ASYNC,
  USER_DATA_BYID_ASYNC,
  SET_PANEL_CONTENTS_ASYNC,
  ADMIN_DATA_ASYNC,
  ADMIN_DATA_BYID_ASYNC,
  ADMIN_DATA_UPDATE_ASYNC,
  ADMIN_CREATED_SUCCESS,
  COURIERS_DATA_ASYNC,
  GET_FINANCIAL_LIST_ASYNC,
  GET_CITY_LIST_ASYNC,
  UPDATE_USER_DATA_ASYNC,
} from "../constants";

const updateAdmindata = (state, action) => {
  const { admin } = state;
  const { _id } = action.payload;
  admin.map((item, key) => {
    if (item._id === _id) {
      admin[key] = action.payload;
    };
  });
  return admin;
};
const updateUserData = (state, action) => {
  const { users } = state;
  const { _id } = action.payload;
  users.map((item, key) => {
    item._id === _id && (users[key] = action.payload)
  });
  return users;
}

const separateUsers = (state, action) => {
  let s = 0;
  let senders = [];
  action.payload.map((item, key) => {
    item.type === "sender" && (senders[s++] = action.payload[key]);
  });
  return Object.assign({}, state, { senders });
};

const separateCouriers = (state, action) => {
  let s = 0;
  let couriers = [];
  action.payload.map((item, key) => {
    item.type === "courier" && (couriers[s++] = action.payload[key]);
  });
  return Object.assign({}, state, { couriers });
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case SENDERS_DATA_ASYNC:
      return separateUsers(state, action);
    case SENDER_DATA_BYID_ASYNC:
      return Object.assign({}, state, { senders: action.payload });
    case COURIERS_DATA_ASYNC:
      return separateCouriers(state, action);
    case USER_DATA_BYID_ASYNC:
      return Object.assign({}, state, { userDetail: action.payload });
    case SET_PANEL_CONTENTS_ASYNC:
      return Object.assign({}, state, { panel: action.payload });
    case ADMIN_DATA_ASYNC:
      return Object.assign({}, state, { admin: action.payload });
    case ADMIN_DATA_BYID_ASYNC:
      return Object.assign({}, state, { admininfo: action.payload });
    case ADMIN_DATA_UPDATE_ASYNC:
      const data = updateAdmindata(state, action);
      return Object.assign({}, state, { admin: data });
    case ADMIN_CREATED_SUCCESS:
      return Object.assign({}, state, { createadmin: true });
    case GET_FINANCIAL_LIST_ASYNC:
      return Object.assign({}, state, { financy: action.payload });
    case GET_CITY_LIST_ASYNC:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_USER_DATA_ASYNC:
      const users = updateUserData(state, action);
      return Object.assign({}, state, { users });
    default:
      return state;
  };
};

export default rootReducer;
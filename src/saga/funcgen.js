import { put, call } from 'redux-saga/effects';
import {
  sender,
  senders,
  couriers,
  userInfo,
  setAdminDataAsync,
  adminInfoAsync,
  adminInfoUpdateAsync,
  adminCreateSuccess,
  setPanelContents,
  getFinancialListAsync,
  getCityListAsync,
  updateUserDataAsync,
} from '../actions/actionCreators';
import {
  ajaxApi,
  updateApi
} from './ajaxApi'
export function* getSendersData() {
  try {
    const { data } = yield call(
      ajaxApi,
      'get',
      'http://harpygle.us-east-1.elasticbeanstalk.com/admin-api/models/users',
      {
        'access-token': localStorage.getItem('access-token'),
        'Content-Type': 'application/json',
      },
    );
    yield put(senders(data));
  } catch (e) {
    console.log(e);
  }
};

export function* getCouriersData() {
  try {
    const { data } = yield call(
      ajaxApi,
      'get',
      'http://harpygle.us-east-1.elasticbeanstalk.com/admin-api/models/users',
      {
        'access-token': localStorage.getItem('access-token'),
        'Content-Type': 'application/json',
      },
    );
    yield put(couriers(data));
  } catch (e) {
    console.log(e);
  };
}
export function* getSenderDataByFilter(params) {
  try {
    const { data } = yield call(
      ajaxApi,
      'get',
      'http://harpygle.us-east-1.elasticbeanstalk.com/admin-api/models/',
      {
        'access-token': localStorage.getItem('access-token'),
        'Content-Type': 'application/json',
        'filter': params.payload,
      }
    );
    yield (put(sender(data)));
  } catch (e) {
    console.log(e);
  }
};

export function* getUserById(ID) {
  try {
    const { data } = yield call(
      ajaxApi,
      'get',
      `http://harpygle.us-east-1.elasticbeanstalk.com/admin-api/models/users/${ID.payload}`,
      {
        'access-token': localStorage.getItem('access-token'),
        'Content-Type': 'application/json',
      }
    );
    yield put(userInfo(data));
  } catch (e) {
    console.log(e);
  }
};
export function* getAdminData() {
  try {
    const { data } = yield call(
      ajaxApi,
      'get',
      'http://harpygle.us-east-1.elasticbeanstalk.com/admin-api/models/admin',
      {
        'access-token': localStorage.getItem('access-token'),
        'Content-Type': 'application/json',
      },
    );
    yield put(setAdminDataAsync(data));
  } catch (e) {
    console.log(e);
  }
};

export function* getAdminDataById(ID) {
  try {
    const { data } = yield call(
      ajaxApi,
      'get',
      `http://harpygle.us-east-1.elasticbeanstalk.com/admin-api/models/admin/${ID.payload}`,
      {
        'access-token': localStorage.getItem('access-token'),
        'Content-Type': 'application/json',
      },
    );
    yield put(adminInfoAsync(data));
  } catch (e) {
    console.log(e);
  }
};

export function* updateAdminData(update) {
  const { id } = update.payload;
  try {
    const { data } = yield call(
      updateApi,
      'put',
      `http://harpygle.us-east-1.elasticbeanstalk.com/admin-api/models/admin/${id}`,
      {
        'access-token': localStorage.getItem('access-token'),
        'Content-Type': 'application/json',
      },
      update.payload,
    );
    yield put(adminInfoUpdateAsync(data));
  } catch(e) {
    console.log(e);
  }
};
export function* createAdmin(createdata) {
  try {
    const { data } = yield call(
      updateApi,
      'post',
      `http://harpygle.us-east-1.elasticbeanstalk.com/admin-api/models/admin`,
      {
        'access-token': localStorage.getItem('access-token'),
        'Content-Type': 'application/json',
      },
      createdata.payload,
    );
    yield put(setPanelContents("admin"));
  } catch (e) {
    console.log(e);
  };
};
export function* getFinancialList(params) {
  // try {
  //   const { data } = yield call(
  //     ajaxApi,
  //     'get',

  //   )
  //  yield put(getFinancialListAsync(data));
  // } catch (e) {
  //   console.log(e);
  // }
};
export function* getCityList() {
  try {
    const { data } = yield call(
      ajaxApi,
      'get',
      `http://harpygle.us-east-1.elasticbeanstalk.com/admin-api/models/city`,
      {
        'access-token': localStorage.getItem('access-token'),
        'Content-Type': 'application/json',
      },
    );
    yield put(getCityListAsync(data));
  } catch (e) {
    console.log(e);
  }
};
export function* updateUserData(senddata) {
  const { id } = senddata.payload;
  try {
    const { data } = yield call(
      updateApi,
      'put',
      `http://harpygle.us-east-1.elasticbeanstalk.com/admin-api/models/users/${id}`,
      {
        'access-token': localStorage.getItem('access-token'),
        'Content-Type': 'application/json',
      },
      senddata.payload,
    )
    updateUserDataAsync(data);
  } catch (e) {
    console.log(e);
  }
};
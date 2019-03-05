import { put } from 'redux-saga/effects';
import {
  setPanelContents,
  adminCreateSuccess,
} from '../actions/actionCreators';
export function* setPanelContentsWithTitle(title) {
  yield put(setPanelContents(title.payload)); 
};

export function* setAdminCreatedSuccess() {
  yield put(adminCreateSuccess());
}
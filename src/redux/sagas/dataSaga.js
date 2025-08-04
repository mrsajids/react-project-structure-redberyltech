// sagas/dataSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getUsers } from '../../controllers/userController';

function* fetchData(action) {
  try {
    const response = yield call(getUsers, action.payload);
    
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: response });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', error: error.message });
  }
}

export function* watchFetchData() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchData);
}
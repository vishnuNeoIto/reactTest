import { call, put, takeLatest } from 'redux-saga/effects';
import {request } from './service'

function* listUsersSaga(action) {
    console.log('listcall');
    try {
        const users = yield call( request, action.payload);
        
        const { error, message } = users;
    } catch (e) {
        yield put({ type: 'LIST_USERS_FAIL', payload: e.message });
    }
}



function* watcher() {
    yield takeLatest('LIST_USER', listUsersSaga);
}

export default  watcher;
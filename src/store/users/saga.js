import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';


function* getUsersSaga (action) {
    try {
        const users = yield call( () => {
            fetch('http://localhost:3333/users?')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                return (data);
            });
        })

        const { error,messasge } = users;
        if(error){
            yield put({ type: 'users\list\failed'})
        }
    }
    catch (e) {
        yield put({ type: 'users/list/failed', payload: e.message });
    }
}
function* watcher() {
    yield takeLatest('users/list', getUsersSaga);
}

export default watcher;
import { all, fork } from 'redux-saga/effects';
import LoginSaga from './Features/Login/Saga';
import DocumentsSaga from './Features/Documents/Saga';
import HolidaysSaga from './Features/Holidays/Saga';

const RootSaga = function* root() {
  yield all([
    fork(LoginSaga), 
    fork(DocumentsSaga), 
    fork(HolidaysSaga)]);
};

export default RootSaga;
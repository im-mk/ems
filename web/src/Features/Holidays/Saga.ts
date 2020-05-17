import { put, takeEvery, fork, all, select } from 'redux-saga/effects';
import { Get } from './../../services/Holiday/HolidaysService';
import { HolidaysGetSuccess, HolidaysGetFailure } from './Action';
import { HOLIDAYS_GET_REQUEST, IHolidaysGetRequestAction } from './Types';
import IHoliday from '../../services/Holiday/types/IHoliday';
import { SelectToken } from '../Login/Reducer';
import { SelectHolidaysState } from './Reducer';

function* HandleHolidaysGetRequest(action: IHolidaysGetRequestAction) {
    try {                     
        const token = yield select(SelectToken);
        const holidaysState = yield select(SelectHolidaysState);
        const result: IHoliday[] = yield Get(token, holidaysState.Page, holidaysState.Size);
        yield put(HolidaysGetSuccess(result));
    } catch (err) {        
        yield put(HolidaysGetFailure("error"))
    }
}

function* WatchHolidaysGetRequest() {
   yield takeEvery(HOLIDAYS_GET_REQUEST, HandleHolidaysGetRequest)
}

function* HolidaysSaga() {
    yield all([
        fork(WatchHolidaysGetRequest)
    ])
}

export default HolidaysSaga;
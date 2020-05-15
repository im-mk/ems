import { put, takeEvery, fork, all } from 'redux-saga/effects';
import Login from './../../services/User/User';
import { LoginSuccess, LoginFailure} from './Action';
import { LOGIN_REQUEST, ILoginRequestAction, LOGIN_SUCCESS } from './Types';
import ILogin from '../../services/User/ILogin';
import { push } from 'connected-react-router';

function* HandleLoginRequest(action: ILoginRequestAction) {
    try {                                          
        const result: ILogin = yield Login(action.payload.username, action.payload.password);        
        yield put(LoginSuccess(result.token));
    } catch (err) {        
        yield put(LoginFailure("error"))
    }
}

function* HandleLoginSuccess() {    
    yield put(push('/'));
}

function* WatchLoginRequest() {
   yield takeEvery(LOGIN_REQUEST, HandleLoginRequest)
}

function* WatchLoginSuccess() {
    yield takeEvery(LOGIN_SUCCESS, HandleLoginSuccess)
 }

function* LoginSaga() {
    yield all([
        fork(WatchLoginRequest), 
        fork(WatchLoginSuccess)
    ])
}

export default LoginSaga;
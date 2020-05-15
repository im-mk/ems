import { ICredentials, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LOGIN_REQUEST, ILoginRequestAction, ILogoutAction, ILoginFailureAction, ILoginSuccessAction } from "./Types";

export function LoginRequest(payload: ICredentials): ILoginRequestAction {
  return {
    type: LOGIN_REQUEST,
    payload: payload
  };
}

export function LoginSuccess(payload: string): ILoginSuccessAction {
    return {
      type: LOGIN_SUCCESS,
      payload: payload
    };
}

export function LoginFailure(payload: string): ILoginFailureAction {
  return {
    type: LOGIN_FAILURE,
    payload: payload
  };
}

export function Logout(): ILogoutAction {
    return {
      type: LOGOUT
    };
}
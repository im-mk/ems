export interface ICredentials {
    username: string;
    password: string;
}
  
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export interface ILoginState {
    token: string;
}

export interface ILoginRequestAction {
    type: typeof LOGIN_REQUEST;
    payload: ICredentials;
}

export interface ILoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: string;
}

export interface ILoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: string;
}

export interface ILogoutAction {
    type: typeof LOGOUT;
}

export type LoginActionTypes = ILoginRequestAction | ILoginSuccessAction | ILoginFailureAction | ILogoutAction;
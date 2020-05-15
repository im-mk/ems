import { LOGIN_SUCCESS, ILoginState, LoginActionTypes, LOGOUT } from "./Types";
import { IApplicationState } from "../../RootReducer";

const initialState: ILoginState = {
  token: ''
};

function LoginReducer(state = initialState, action: LoginActionTypes): ILoginState {
  switch (action.type) {
    // case LOGIN_REQUEST: 
    //     return { ...state }
    case LOGIN_SUCCESS:
        return { ...state, token: action.payload } 
    // case LOGIN_FAILURE:
    //     return { ...state, token: action.payload } 
    case LOGOUT:
        return { ...state, token: '' } 
    default:
      return state;
  }
}

export const SelectToken = (state: IApplicationState) => state.Login.token;

export default LoginReducer;